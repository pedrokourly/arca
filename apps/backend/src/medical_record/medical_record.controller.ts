import { Controller, Get, Post, Body, Patch, Param, UseGuards, Req, ParseUUIDPipe, Put, Res } from '@nestjs/common';
import { MedicalRecordService } from './medical_record.service';
import { CreateTriagemProntuarioDto } from './dto/create-triagem-medical_record.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UUID } from 'node:crypto';
import { TokenDto } from 'src/users/dto/token.dto';
import { CreateEvolucaoProntuarioDto } from './dto/create-evolucao-medical_record.dto';
import { ConteudoTriagemDto } from './dto/conteudo-triagem.dto';
import { ConteudoEvolucaoDto } from './dto/conteudo-evolucao.dto';
import { CreateEncaminhamentoDto } from './dto/create-encaminhamento.dto';
import { CreateAltaDto } from './dto/create-alta.dtos';

@Controller('medical-record')
@UseGuards(JwtAuthGuard)
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post('triagem')
  create_triagem(@Body() CreateTriagemProntuarioDto: CreateTriagemProntuarioDto, @Req() req: any) {
    return this.medicalRecordService.createTriagem(CreateTriagemProntuarioDto, req.user as TokenDto);
  }

  @Put('triagem/:id')
  put_triagem(@Param('id', ParseUUIDPipe) id: UUID, @Body() ConteudoTriagemDto:ConteudoTriagemDto, @Req() req: any) {
    return this.medicalRecordService.putTriagem(id, ConteudoTriagemDto, req.user as TokenDto);
  }

  @Patch('triagem/:id/approve')
  approve_triagem(@Param('id', ParseUUIDPipe) id: UUID, @Body() CreateEncaminhamentoDto:CreateEncaminhamentoDto, @Req() req: any) {
    return this.medicalRecordService.approveTriagem(id, CreateEncaminhamentoDto, req.user as TokenDto);
  }

  @Post('psicoterapia')
  create_evolucao(@Body() CreateEvolucaoProntuarioDto: CreateEvolucaoProntuarioDto, @Req() req: any) {
    return this.medicalRecordService.createEvolucao(CreateEvolucaoProntuarioDto, req.user as TokenDto);
  }

  @Put('psicoterapia/:id')
  put_evolucao(@Param('id', ParseUUIDPipe) id: UUID, @Body() ConteudoEvolucaoDto:ConteudoEvolucaoDto, @Req() req: any) {
    return this.medicalRecordService.putEvolucao(id, ConteudoEvolucaoDto, req.user as TokenDto);
  }

  @Patch('psicoterapia/:id/approve')
  approve_evolucao(@Param('id', ParseUUIDPipe) id: UUID, @Body() CreateAltaDto:CreateAltaDto, @Req() req: any) {
    return this.medicalRecordService.approveEvolucao(id, CreateAltaDto, req.user as TokenDto);
  }

  @Get('prontuarios/pdf/:id')
  generatePdf(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: any, @Res() res: any) {
    return this.medicalRecordService.generatePdf(id, req.user as TokenDto, res);
  }

  @Get('prontuarios/alta/pdf/:id')
  generateAltaPdf(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: any, @Res() res: any) {
    return this.medicalRecordService.generateAltaPdf(id, req.user as TokenDto, res);
  }

  @Get('prontuarios/encaminhamento/pdf/:id')
  generateEncaminhamentoPdf(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: any, @Res() res: any) {
    return this.medicalRecordService.generateEncaminhamentoPdf(id, req.user as TokenDto, res);
  }

  @Get('prontuarios')
  findAll(@Req() req: any) {
    return this.medicalRecordService.findAll(req.user as TokenDto);
  }

  @Get('prontuarios/:id')
  findOne(@Param('id') id: UUID, @Req() req: any) {
    return this.medicalRecordService.findOne(id, req.user as TokenDto);
  }
}
