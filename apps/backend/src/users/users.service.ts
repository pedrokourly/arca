import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingServiceProtocol } from 'src/auth/hash/hashing.service';
import { UUID } from 'node:crypto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private HashingService: HashingServiceProtocol,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
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
    } catch (error) {
      throw new BadRequestException(`Erro ao criar usuário.`);
    }
  }

  async findAll() {
    const users = await this.prisma.usuario.findMany({
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
    } else if (users.length === 0){
      throw new NotFoundException(`Nenhum usuário encontrado.`);
    }

    return users;
  }

  async findOne(id: UUID) {
    const user = await this.prisma.usuario.findFirst({
      where: { id_User: id },
      select: {
        id_User: true,
        nome: true,
        email: true,
        senhaHash: false,
        roleId: true,
      },
    });
    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
