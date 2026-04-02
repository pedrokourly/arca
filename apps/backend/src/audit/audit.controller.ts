import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuditService } from './audit.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenDto } from 'src/common/dto/token.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RoleAccess } from 'src/common/enums/status.enum';

@Controller('audit')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AuditController {
  constructor(private auditService: AuditService) {}

  @Roles(RoleAccess.ADMIN)
  @Get('/')
  async getAuditInfo() {
    return this.auditService.findAll();
  }
}
