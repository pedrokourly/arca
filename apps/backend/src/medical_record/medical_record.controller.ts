import { Controller, Get, Post, Body, Patch, Param, UseGuards, Req, ParseUUIDPipe } from '@nestjs/common';
import { MedicalRecordService } from './medical_record.service';
import { CreateTriagemProntuarioDto } from './dto/create-triagem-medical_record.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UUID } from 'node:crypto';
import { TokenDto } from 'src/users/dto/token.dto';
import { CreateEvolucaoProntuarioDto } from './dto/create-evolucao-medical_record.dto';

@Controller('medical-record')
@UseGuards(JwtAuthGuard)
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post('triagem')
  create_triagem(@Body() CreateTriagemProntuarioDto: CreateTriagemProntuarioDto, @Req() req: any) {
    return this.medicalRecordService.createTriagem(CreateTriagemProntuarioDto, req.user as TokenDto);
  }

  @Patch('triagem/:id/approve')
  approve_triagem(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: any) {
    return this.medicalRecordService.approveTriagem(id, req.user as TokenDto);
  }

  @Post('psicoterapia')
  create_evolucao(@Body() CreateEvolucaoProntuarioDto: CreateEvolucaoProntuarioDto, @Req() req: any) {
    return this.medicalRecordService.createEvolucao(CreateEvolucaoProntuarioDto, req.user as TokenDto);
  }

  @Patch('psicoterapia/:id/approve')
  approve_evolucao(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: any) {
    return this.medicalRecordService.approveEvolucao(id, req.user as TokenDto);
  }

  // @Get()
  // findAll(@Req() req: any) {
  //   return this.medicalRecordService.findAll(req.user as TokenDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: UUID, @Req() req: any) {
  //   return this.medicalRecordService.findOne(id, req.user as TokenDto);
  // }
}
