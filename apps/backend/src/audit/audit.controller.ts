import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { AuditService } from './audit.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RequestWithJwtPayload } from 'src/auth/types/auth-request.interface';

@Controller('audit')
@UseGuards(JwtAuthGuard)
export class AuditController {
  constructor(private auditService: AuditService) {}

  @Get('/')
  async getAuditInfo(@Request() req: RequestWithJwtPayload) {
    return this.auditService.findAll(req.user);
  }
}
