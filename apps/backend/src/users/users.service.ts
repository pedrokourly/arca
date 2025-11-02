import {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { HashingServiceProtocol } from '../auth/hash/hashing.service';
import { UUID } from 'node:crypto';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private HashingService: HashingServiceProtocol,
  ) {}

  async create(createUserDto: CreateUserDto, creator: TokenDto) {
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

    const existingUser = await this.prisma.usuario.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (existingUser) {
      // Se o usuário existe e está ativo, não pode criar
      if (existingUser.isActive) {
        throw new BadRequestException('E-mail já cadastrado.');
      }

      // Se o usuário existe mas está inativo, verifica se tem permissão para ver a opção de reativar
      const canReactivate = creator.access < existingUser.roleId || (creator.access === 1 && existingUser.roleId === 1);

      if (canReactivate) {
        throw new ConflictException({
          message: `Este e-mail pertence a um usuário desativado (${existingUser.nome}). Deseja reativar este usuário em vez de criar um novo?`,
          userId: existingUser.id_User,
          userName: existingUser.nome,
        });
      } else {
        // Se não tem permissão para reativar, apenas informa que o email já está em uso
        throw new BadRequestException('E-mail já cadastrado.');
      }
    }

    if (createUserDto.roleId === 3) {
      if (!createUserDto.crp) {
        throw new BadRequestException('CRP é obrigatório para psicólogos supervisores.');
      }
    }

    const passwordHash = await this.HashingService.hash(createUserDto.senha);

    return this.prisma.usuario.create({
      data: {
        nome: createUserDto.nome,
        email: createUserDto.email,
        senhaHash: passwordHash,
        roleId: createUserDto.roleId,
        CRP: createUserDto.crp || null,
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
        isActive: true,
      },
      select: {
        id_User: true,
        nome: true,
        email: true,
        senhaHash: false,
        roleId: true,
        role: {
          select: {
            id_Role: true,
            role: true,
            descricao: true,
          },
        },
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
        isActive: true,
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
      throw new NotFoundException(`Usuário não encontrado ou acesso não permitido.`);
    }

    return user;
  }

  async update(id: UUID, updateUserDto: UpdateUserDto, creator: TokenDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { id_User: id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    const canEditUser = creator.access < user.roleId || (creator.access === 1 && user.roleId === 1);

    if (!canEditUser) {
      throw new ForbiddenException(
        'Você não tem permissão para editar um usuário com nível de acesso igual ou superior ao seu.',
      );
    }

    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingUser = await this.prisma.usuario.findFirst({
        where: {
          email: updateUserDto.email,
          id_User: { not: id },
        },
      });

      if (existingUser) {
        if (existingUser.isActive) {
          throw new BadRequestException('O e-mail informado já está em uso por outro usuário.');
        }

        const canReactivate =
          creator.access < existingUser.roleId || (creator.access === 1 && existingUser.roleId === 1);

        if (canReactivate) {
          throw new ConflictException({
            message: `Este e-mail pertence a um usuário desativado (${existingUser.nome}). Deseja reativar este usuário em vez de alterar o e-mail?`,
            userId: existingUser.id_User,
            userName: existingUser.nome,
          });
        } else {
          throw new BadRequestException('O e-mail informado já está em uso por outro usuário.');
        }
      }
    }

    const dataToUpdate: Prisma.UsuarioUpdateInput = {
      nome: updateUserDto.nome,
      email: updateUserDto.email,
    };

    if (updateUserDto.crp !== undefined) {
      if (user.roleId !== 3) {
        throw new BadRequestException(
          'O campo CRP (Conselho Regional de Psicologia) só pode ser definido para usuários do tipo Supervisor.',
        );
      }

      dataToUpdate.CRP = updateUserDto.crp;
    }

    if (updateUserDto.senha) {
      dataToUpdate.senhaHash = await this.HashingService.hash(updateUserDto.senha);
    }

    return this.prisma.usuario.update({
      where: { id_User: id },
      data: dataToUpdate,
      select: {
        id_User: true,
        nome: true,
        email: true,
        roleId: true,
        CRP: true,
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
    const canDelete = creator.access < user.roleId || (creator.access === 1 && user.roleId === 1);

    if (!canDelete) {
      throw new ForbiddenException(
        'Você não tem permissão para deletar um usuário com nível de acesso igual ou superior ao seu.',
      );
    }

    await this.prisma.usuario.update({
      where: { id_User: id },
      data: {
        isActive: false,
      },
    });

    return { message: `Usuário com ID ${id} desativado com sucesso.` };
  }

  async reactivate(id: UUID, creator: TokenDto) {
    // Busca o usuário que será reativado
    const user = await this.prisma.usuario.findUnique({
      where: { id_User: id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    if (user.isActive) {
      throw new BadRequestException('Este usuário já está ativo.');
    }

    // Verifica se tem permissão para reativar
    const canReactivate = creator.access < user.roleId || (creator.access === 1 && user.roleId === 1);

    if (!canReactivate) {
      throw new ForbiddenException(
        'Você não tem permissão para reativar um usuário com nível de acesso igual ou superior ao seu.',
      );
    }

    await this.prisma.usuario.update({
      where: { id_User: id },
      data: {
        isActive: true,
      },
    });

    return { message: `Usuário ${user.nome} reativado com sucesso.` };
  }
}
