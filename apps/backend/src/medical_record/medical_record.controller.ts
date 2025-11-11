import { Controller, Get, Post, Body, Patch, Param, UseGuards, Req, ParseUUIDPipe, Put, Res } from '@nestjs/common';
import { MedicalRecordService } from './medical_record.service';
import { CreateTriagemProntuarioDto } from './dto/create-triagem-medical_record.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UUID } from 'node:crypto';
import { CreateEvolucaoProntuarioDto } from './dto/create-evolucao-medical_record.dto';
import { ConteudoTriagemDto } from './dto/conteudo-triagem.dto';
import { ConteudoEvolucaoDto } from './dto/conteudo-evolucao.dto';
import { CreateEncaminhamentoDto } from './dto/create-encaminhamento.dto';
import { CreateAltaDto } from './dto/create-alta.dtos';
import { RequestWithJwtPayload } from 'src/auth/types/auth-request.interface';

@Controller('medical-record')
@UseGuards(JwtAuthGuard)
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post('triagem')
  create_triagem(@Body() CreateTriagemProntuarioDto: CreateTriagemProntuarioDto, @Req() req: RequestWithJwtPayload) {
    return this.medicalRecordService.createTriagem(CreateTriagemProntuarioDto, req.user);
  }

  @Put('triagem/:id')
  put_triagem(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() ConteudoTriagemDto: ConteudoTriagemDto,
    @Req() req: RequestWithJwtPayload,
  ) {
    return this.medicalRecordService.putTriagem(id, ConteudoTriagemDto, req.user);
  }

  @Patch('triagem/:id/approve')
  approve_triagem(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() CreateEncaminhamentoDto: CreateEncaminhamentoDto,
    @Req() req: RequestWithJwtPayload,
  ) {
    return this.medicalRecordService.approveTriagem(id, CreateEncaminhamentoDto, req.user);
  }

  @Post('psicoterapia')
  create_evolucao(@Body() CreateEvolucaoProntuarioDto: CreateEvolucaoProntuarioDto, @Req() req: RequestWithJwtPayload) {
    return this.medicalRecordService.createEvolucao(CreateEvolucaoProntuarioDto, req.user);
  }

  @Put('psicoterapia/:id')
  put_evolucao(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() ConteudoEvolucaoDto: ConteudoEvolucaoDto,
    @Req() req: RequestWithJwtPayload,
  ) {
    return this.medicalRecordService.putEvolucao(id, ConteudoEvolucaoDto, req.user);
  }

  @Patch('psicoterapia/:id/approve')
  approve_evolucao(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() CreateAltaDto: CreateAltaDto,
    @Req() req: RequestWithJwtPayload,
  ) {
    return this.medicalRecordService.approveEvolucao(id, CreateAltaDto, req.user);
  }

  @Get('prontuarios/pdf/:id')
  generatePdf(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: RequestWithJwtPayload, @Res() res: any) {
    return this.medicalRecordService.generatePdf(id, req.user, res);
  }

  @Get('prontuarios/alta/pdf/:id')
  generateAltaPdf(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: RequestWithJwtPayload, @Res() res: any) {
    return this.medicalRecordService.generateAltaPdf(id, req.user, res);
  }

  @Get('prontuarios/encaminhamento/pdf/:id')
  generateEncaminhamentoPdf(@Param('id', ParseUUIDPipe) id: UUID, @Req() req: RequestWithJwtPayload, @Res() res: any) {
    return this.medicalRecordService.generateEncaminhamentoPdf(id, req.user, res);
  }

  @Get('prontuarios')
  findAll(@Req() req: RequestWithJwtPayload) {
    return this.medicalRecordService.findAll(req.user);
  }

  @Get('prontuarios/:id')
  findOne(@Param('id') id: UUID, @Req() req: RequestWithJwtPayload) {
    return this.medicalRecordService.findOne(id, req.user);
  }
}
