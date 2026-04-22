import { Controller, Get, Post, Body, Patch, Param, UseGuards, ParseUUIDPipe, Put, Res, Query } from '@nestjs/common';
import { MedicalRecordService } from './medical_record.service';
import { CreateTriagemProntuarioDto } from './dto/create-triagem-medical_record.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UUID } from 'node:crypto';
import { TokenDto } from 'src/common/dto/token.dto';
import { CreateEvolucaoProntuarioDto } from './dto/create-evolucao-medical_record.dto';
import { ConteudoTriagemDto } from './dto/conteudo-triagem.dto';
import { ConteudoEvolucaoDto } from './dto/conteudo-evolucao.dto';
import { CreateEncaminhamentoDto } from './dto/create-encaminhamento.dto';
import { CreateAltaDto } from './dto/create-alta.dtos';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RoleAccess } from 'src/common/enums/status.enum';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Response } from 'express';

@Controller('medical-record')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MedicalRecordController {
    constructor(private readonly medicalRecordService: MedicalRecordService) { }

    @Roles(RoleAccess.ADMIN, RoleAccess.SUPERVISOR, RoleAccess.ESTAGIARIO)
    @Post('triagem')
    create_triagem(@Body() CreateTriagemProntuarioDto: CreateTriagemProntuarioDto, @CurrentUser() user: TokenDto) {
        return this.medicalRecordService.createTriagem(CreateTriagemProntuarioDto, user);
    }

    @Roles(RoleAccess.ADMIN, RoleAccess.SUPERVISOR, RoleAccess.ESTAGIARIO)
    @Put('triagem/:id')
    put_triagem(
        @Param('id', ParseUUIDPipe) id: UUID,
        @Body() ConteudoTriagemDto: ConteudoTriagemDto,
        @CurrentUser() user: TokenDto,
    ) {
        return this.medicalRecordService.putTriagem(id, ConteudoTriagemDto, user);
    }

    @Roles(RoleAccess.ADMIN, RoleAccess.SUPERVISOR)
    @Patch('triagem/:id/approve')
    approve_triagem(
        @Param('id', ParseUUIDPipe) id: UUID,
        @Body() CreateEncaminhamentoDto: CreateEncaminhamentoDto,
        @CurrentUser() user: TokenDto,
    ) {
        return this.medicalRecordService.approveTriagem(id, CreateEncaminhamentoDto, user);
    }

    @Roles(RoleAccess.ADMIN, RoleAccess.SUPERVISOR, RoleAccess.ESTAGIARIO)
    @Post('psicoterapia')
    create_evolucao(@Body() CreateEvolucaoProntuarioDto: CreateEvolucaoProntuarioDto, @CurrentUser() user: TokenDto) {
        return this.medicalRecordService.createEvolucao(CreateEvolucaoProntuarioDto, user);
    }

    @Roles(RoleAccess.ADMIN, RoleAccess.SUPERVISOR, RoleAccess.ESTAGIARIO)
    @Put('psicoterapia/:id')
    put_evolucao(
        @Param('id', ParseUUIDPipe) id: UUID,
        @Body() ConteudoEvolucaoDto: ConteudoEvolucaoDto,
        @CurrentUser() user: TokenDto,
    ) {
        return this.medicalRecordService.putEvolucao(id, ConteudoEvolucaoDto, user);
    }

    @Roles(RoleAccess.ADMIN, RoleAccess.SUPERVISOR)
    @Patch('psicoterapia/:id/approve')
    approve_evolucao(
        @Param('id', ParseUUIDPipe) id: UUID,
        @Body() CreateAltaDto: CreateAltaDto,
        @CurrentUser() user: TokenDto,
    ) {
        return this.medicalRecordService.approveEvolucao(id, CreateAltaDto, user);
    }

    @Get('prontuarios/pdf/:id')
    generatePdf(@Param('id', ParseUUIDPipe) id: UUID, @CurrentUser() user: TokenDto, @Res() res: Response) {
        return this.medicalRecordService.generatePdf(id, user, res);
    }

    @Get('prontuarios/alta/pdf/:id')
    generateAltaPdf(@Param('id', ParseUUIDPipe) id: UUID, @CurrentUser() user: TokenDto, @Res() res: Response) {
        return this.medicalRecordService.generateAltaPdf(id, user, res);
    }

    @Get('prontuarios/encaminhamento/pdf/:id')
    generateEncaminhamentoPdf(@Param('id', ParseUUIDPipe) id: UUID, @CurrentUser() user: TokenDto, @Res() res: Response) {
        return this.medicalRecordService.generateEncaminhamentoPdf(id, user, res);
    }

    @Get('prontuarios')
    findAll(@CurrentUser() user: TokenDto, @Query() pagination: PaginationDto) {
        return this.medicalRecordService.findAll(user, pagination);
    }

    @Get('prontuarios/:id')
    findOne(@Param('id') id: UUID, @CurrentUser() user: TokenDto) {
        return this.medicalRecordService.findOne(id, user);
    }
}
