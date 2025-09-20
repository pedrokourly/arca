// src/audit/audit.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client'; // Importa o tipo JsonValue
import { TokenDto } from './dto/token.dto';

// DTO atualizado
export class CreateAuditLogDto {
  id_Usuario_Executor: string;
  nome_Usuario_Executor: string;
  tipoAcao: string;
  entidade_Afetada?: string;
  id_Entidade_Afetada?: string;
  endereco_Ip?: string;
  detalhes?: Prisma.InputJsonValue;
}

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async create(logData: CreateAuditLogDto) {
    return await this.prisma.logAuditoria.create({
      data: logData,
    });
  }

  async findAll(user : TokenDto) {
    if(user.access !== 1){
      throw new UnauthorizedException('Acesso negado.');
    }
  
    return await this.prisma.logAuditoria.findMany();
  }
}