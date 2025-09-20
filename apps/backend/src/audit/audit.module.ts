// src/audit/audit.module.ts
import { Module } from '@nestjs/common';
import { AuditService } from './audit.service';
import { PrismaModule } from '../prisma/prisma.module'; // Importe o PrismaModule

@Module({
  imports: [PrismaModule], // Disponibiliza o PrismaService
  providers: [AuditService],
  exports: [AuditService],
})
export class AuditModule {}