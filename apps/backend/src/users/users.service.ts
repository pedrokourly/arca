import {
  BadGatewayException,
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingServiceProtocol } from 'src/auth/hash/hashing.service';
import { UUID } from 'node:crypto';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private HashingService: HashingServiceProtocol,
  ) {}

  async create(createUserDto: CreateUserDto, creator: TokenDto) {
    // Verifica se o criador tem permissão para criar usuários
    if (
      // 1. A regra geral: proíbe se o novo usuário tiver acesso igual ou superior
      createUserDto.roleId <= creator.access &&
      // 2. A exceção: a regra acima NÃO se aplica se for um Admin (1) criando outro Admin (1)
      !(creator.access === 1 && createUserDto.roleId === 1)
    ) {
      throw new ForbiddenException(
        'Você não tem permissão para criar um usuário com nível de acesso igual ou superior ao seu.',
      );
    }

    // Verifica se o email já existe
    const existingUser = await this.prisma.usuario.findUnique({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new BadRequestException('E-mail já cadastrado.');
    }

    const passwordHash = await this.HashingService.hash(createUserDto.senha);

    return this.prisma.usuario.create({
      data: {
        nome: createUserDto.nome,
        email: createUserDto.email,
        senhaHash: passwordHash,
        roleId: createUserDto.roleId,
      },
      select: {
        id_User: true,
        nome: true,
        email: true,
        senhaHash: false,
        roleId: true,
      },
    });
  }

  async findAll(creator: TokenDto) {
    // Lista apenas os usuários com nível de acesso menor ou igual ao do criador
    const users = await this.prisma.usuario.findMany({
      where: {
        roleId: {
          gte: creator.access,
        },
      },
      select: {
        id_User: true,
        nome: true,
        email: true,
        senhaHash: false,
        roleId: true,
      },
    });
    if (!users) {
      throw new BadGatewayException(`Erro ao buscar usuários.`);
    } else if (users.length === 0) {
      throw new NotFoundException(`Nenhum usuário encontrado.`);
    }

    return users;
  }

  async findOne(id: UUID, creator: TokenDto) {
    // Lista apenas o usuário com nível de acesso menor ao do criador
    const user = await this.prisma.usuario.findFirst({
      where: {
        id_User: id,
        roleId: {
          gte: creator.access,
        },
      },
      select: {
        id_User: true,
        nome: true,
        email: true,
        senhaHash: false,
        roleId: true,
      },
    });
    if (!user) {
      throw new NotFoundException(
        `Usuário não encontrado ou acesso não permitido.`,
      );
    }

    return user;
  }

  async update(id: UUID, updateUserDto: UpdateUserDto, creator: TokenDto) {
    const user = await this.prisma.usuario.findFirst({
      where: { id_User: id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    // REGRA 1: Você não pode editar um usuário com nível igual ou superior ao seu
    const canEditUser =
      creator.access < user.roleId ||
      (creator.access === 1 && user.roleId === 1);

    if (!canEditUser) {
      throw new ForbiddenException(
        'Você não tem permissão para editar um usuário com nível de acesso igual ou superior ao seu.',
      );
    }

    // REGRA 2: Você não pode atribuir um nível de acesso igual ou superior ao seu
    if (updateUserDto.roleId && updateUserDto.roleId <= creator.access) {
      // A exceção para Admin (1) atribuindo Admin (1)
      if (!(creator.access === 1 && updateUserDto.roleId === 1)) {
        throw new ForbiddenException(
          'Você não tem permissão para atribuir um nível de acesso igual ou superior ao seu.',
        );
      }
    }

    // Verifica se o email já existe
    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingUser = await this.prisma.usuario.findFirst({
        where: {
          email: updateUserDto.email,
          id_User: { not: id },
        },
      });

      if (existingUser) {
        throw new BadRequestException(
          'O e-mail informado já está em uso por outro usuário.',
        );
      }
    }

    const dataToUpdate: Prisma.UsuarioUpdateInput = { ...updateUserDto };

    if (updateUserDto.senha) {
      dataToUpdate.senhaHash = await this.HashingService.hash(
        updateUserDto.senha,
      );
      delete dataToUpdate.senhaHash; // Remove a senha em texto plano do DTO
    }

    return this.prisma.usuario.update({
      where: { id_User: id },
      data: dataToUpdate, // Passa o objeto de dados já preparado
      select: {
        id_User: true,
        nome: true,
        email: true,
        roleId: true,
      },
    });
  }

  async remove(id: UUID, creator: TokenDto) {
    // 1. Busca o usuário que será deletado
    const user = await this.prisma.usuario.findUnique({
      where: { id_User: id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    // Você não pode deletar a si mesmo.
    if (creator.sub === user.id_User) {
      throw new ForbiddenException('Você não pode deletar sua própria conta.');
    }

    // Você não pode deletar um usuário com nível de acesso igual ou superior.
    const canDelete =
      creator.access < user.roleId ||
      (creator.access === 1 && user.roleId === 1);

    if (!canDelete) {
      throw new ForbiddenException(
        'Você não tem permissão para deletar um usuário com nível de acesso igual ou superior ao seu.',
      );
    }

    await this.prisma.usuario.delete({
      where: { id_User: id },
    });

    return { message: `Usuário com ID ${id} removido com sucesso.` };
  }
}
