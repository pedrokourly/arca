import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashingServiceProtocol } from './hash/hashing.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import jwtConfig from './config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { UserWithoutPassword } from './types/auth-request.interface';

@Injectable()
export class AuthService {
  constructor(
    private hashingService: HashingServiceProtocol,
    private prisma: PrismaService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(body: LoginDto): Promise<UserWithoutPassword | null> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: body.email,
        isActive: true,
      },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await this.hashingService.compare(body.password, user.senhaHash);
    if (!isPasswordValid) {
      return null;
    }

    // Retorna o usuário sem a senha
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { senhaHash, ...result } = user;
    return result;
  }

  async login(user: UserWithoutPassword): Promise<any> {
    // Converte "5h" para segundos (5 * 60 * 60 = 18000)
    const ttl = this.jwtConfiguration.jwtTtl || '5h';
    let expiresInSeconds: number;
    
    if (typeof ttl === 'string') {
      const match = ttl.match(/^(\d+)([smhd])$/);
      if (match) {
        const value = parseInt(match[1]);
        const unit = match[2];
        const multipliers = { s: 1, m: 60, h: 3600, d: 86400 };
        expiresInSeconds = value * (multipliers[unit as keyof typeof multipliers] || 3600);
      } else {
        expiresInSeconds = 18000; // 5 horas padrão
      }
    } else {
      expiresInSeconds = ttl;
    }

    const token = await this.jwtService.signAsync(
      {
        sub: user.id_User,
        name: user.nome,
        email: user.email,
        access: user.roleId,
      },
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: expiresInSeconds,
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
