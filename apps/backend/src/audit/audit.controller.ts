import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuditService } from './audit.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenDto } from './dto/token.dto';

@Controller('audit')
@UseGuards(JwtAuthGuard)
export class AuditController {
  constructor(private auditService: AuditService) {}

  @Get('/')
    async getAuditInfo(@Request() req: any){
        return this.auditService.findAll(req.user as TokenDto);
    }
}
