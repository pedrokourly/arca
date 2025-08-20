import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashingServiceProtocol } from './hash/hashing.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import jwtConfig from './config/jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private hashingService: HashingServiceProtocol,
    private prisma: PrismaService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: email,
      },
    });
    
    if (!user) {
      return null;
    }

    const isPasswordValid = await this.hashingService.compare(password, user.senhaHash);
    if (!isPasswordValid) {
      return null;
    }

    // Retorna o usuário sem a senha
    const { senhaHash, ...result } = user;
    return result;
  }

  async login(body: LoginDto): Promise<any> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: body.email,
      },
    });
    
    if (!user){
      throw new UnauthorizedException('Falha ao autenticar usuário.');
    }

    const isPasswordValid = await this.hashingService.compare(body.password, user.senhaHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha ou e-mail inválido.');
    }

    const token = await this.jwtService.signAsync(
      { 
        sub: user.id_User, 
        email: user.email 
      },
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: this.jwtConfiguration.jwtTtl,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
      }
    );

    return {
      id: user.id_User,
      name: user.nome,
      email: user.email,
      token: token,
    };
  }
}
