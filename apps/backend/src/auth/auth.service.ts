import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashingServiceProtocol } from './hash/hashing.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import jwtConfig from './config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private hashingService: HashingServiceProtocol,
    private prisma: PrismaService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(body: LoginDto): Promise<any> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Senha ou e-mail inválido.');
    }

    const isPasswordValid = await this.hashingService.compare(
      body.password,
      user.senhaHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha ou e-mail inválido.');
    }

    // Retorna o usuário sem a senha
    const { senhaHash, ...result } = user;
    return result;
  }

  async login(user: UserDto): Promise<any> {
    const token = await this.jwtService.signAsync(
      {
        sub: user.id_User,
        email: user.email,
        access: user.roleId,
      },
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: this.jwtConfiguration.jwtTtl,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
      },
    );

    return {
      id: user.id_User,
      name: user.nome,
      email: user.email,
      roleId: user.roleId,
      token: token,
    };
  }
}
