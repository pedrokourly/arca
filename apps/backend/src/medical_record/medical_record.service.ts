import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateTriagemProntuarioDto } from './dto/create-triagem-medical_record.dto';
import { CreateEvolucaoProntuarioDto } from './dto/create-evolucao-medical_record.dto';
import { TokenDto } from 'src/users/dto/token.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'node:crypto';

@Injectable()
export class MedicalRecordService {
  constructor(private prisma: PrismaService) {}

  async createTriagem(
    CreateTriagemProntuarioDto: CreateTriagemProntuarioDto,
    user: TokenDto,
  ) {
    const atendimento = await this.prisma.atendimento.findFirst({
      where: { id_Atendimento: CreateTriagemProntuarioDto.id_Sessao },
      include: {
        ListaEspera: true,
      },
    });
    if (!atendimento)
      throw new NotFoundException('Atendimento não encontrado.');
    if (atendimento?.id_Tipo_Atendimento !== 1)
      throw new BadRequestException('Atendimento não é de triagem.');
    if (atendimento.id_Status !== 1)
      throw new BadRequestException('Atendimento não está ativo ou já foi concluido.');
    if (atendimento.ListaEspera?.id_Status !== 2)
      throw new BadRequestException(
        'Paciente ja possuí triagem concluída ou em andamento. Não é possível criar outra triagem.',
      );
    if (
      atendimento.id_Estagiario_Executor === null ||
      atendimento.id_Supervisor_Executor === null
    ) {
      throw new InternalServerErrorException(
        'Estagiário ou supervisor não atribuídos para este atendimento.',
      );
    }

    if (user.access > 2) {
      const isEstagiario = atendimento.id_Estagiario_Executor === user.sub;
      const isSupervisor = atendimento.id_Supervisor_Executor === user.sub;
      if (!isEstagiario && !isSupervisor)
        throw new UnauthorizedException(
          'Você não tem permissão para criar um relatório de triagem para este atendimento.',
        );
    }

    try {
      const [relatorioTriagem] = await this.prisma.$transaction([
        this.prisma.prontuario.create({
          data: {
            id_Atendimento: CreateTriagemProntuarioDto.id_Sessao,

            conteudo: JSON.parse(
              JSON.stringify(CreateTriagemProntuarioDto.conteudo),
            ),

            id_Status: 1, // Em aprovação
            id_Tipo: 1, // Triagem
          },
        }),

        this.prisma.atendimento.update({
          where: { id_Atendimento: CreateTriagemProntuarioDto.id_Sessao },
          data: {
            id_Status: 2, // Em andamento
          },
        }),
      ]);

      return relatorioTriagem;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro no banco de dados. Falha ao salvar a triagem. Tente novamente.',
      );
    }
  }

  async approveTriagem(id: UUID, user: TokenDto) {
    const prontuario = await this.prisma.prontuario.findUnique({
      where: { id_Registro: id },
      include: {
        atendimento: {
          select: {
            id_Lista: true,
            id_Supervisor_Executor: true,
          },
        },
      },
    });

    if (!prontuario) throw new NotFoundException('Prontuário não encontrado.');
    if (prontuario.id_Tipo !== 1)
      throw new BadRequestException('Prontuário não é de triagem.');
    if (prontuario.id_Status !== 1)
      throw new BadRequestException('Triagem já foi aprovada.');
    if (user.access > 3)
      throw new UnauthorizedException(
        'Este usuário não tem permissão para aprovar triagens.',
      );
    if (
      !prontuario.atendimento ||
      !prontuario.atendimento.id_Supervisor_Executor
    )
      throw new InternalServerErrorException('Dados do atendimento inválidos.');
    if (
      user.access === 3 &&
      user.sub !== prontuario.atendimento.id_Supervisor_Executor
    )
      throw new UnauthorizedException(
        'Apenas o supervisor responsável pode aprovar esta triagem.',
      );

    try {
      const [updatedProntuario] = await this.prisma.$transaction([
 
        this.prisma.prontuario.update({
          where: { id_Registro: id },
          data: {
            id_Status: 2, // Aprovado
          },
        }),

        this.prisma.listaEspera.update({
          where: { id_Lista: prontuario.atendimento.id_Lista },
          data: {
            id_Status: 3, // Triagem aprovada
          },
        }),

        this.prisma.atendimento.update({
          where: { id_Atendimento: prontuario.id_Atendimento },
          data: {
            id_Status: 3, // Concluido
          },
        }),
      ]);

      return updatedProntuario;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro no banco de dados. Falha ao aprovar a triagem. Tente novamente.',
      );
    }
  }

  async createEvolucao(
    CreateEvolucaoProntuarioDto: CreateEvolucaoProntuarioDto,
    user: TokenDto,
  ) {
    const atendimento = await this.prisma.atendimento.findFirst({
      where: { id_Atendimento: CreateEvolucaoProntuarioDto.id_Sessao },
      include: {
        ListaEspera: true,
      },
    });
    if (!atendimento)
      throw new NotFoundException('Atendimento não encontrado.');
    if (atendimento?.id_Tipo_Atendimento !== 2) // Psicoterapia
      throw new BadRequestException('Atendimento não é de psicoterapia');
    if (atendimento.id_Status !== 1) // Ativo
      throw new BadRequestException('Atendimento não está ativo ou já foi concluido.');
    
    const status = atendimento.ListaEspera?.id_Status;
    if (status !== 3 && status !== 4) // Triagem aprovada ou Psicoterapia em andamento
      throw new BadRequestException(
      'Paciente não possuí triagem aprovada. Não é possível criar um registro de psicoterapia.',
      );
    if (
      atendimento.id_Estagiario_Executor === null ||
      atendimento.id_Supervisor_Executor === null
    ) {
      throw new InternalServerErrorException(
        'Estagiário ou supervisor não atribuídos para este atendimento.',
      );
    }

    if (user.access > 2) {
      const isEstagiario = atendimento.id_Estagiario_Executor === user.sub;
      const isSupervisor = atendimento.id_Supervisor_Executor === user.sub;
      if (!isEstagiario && !isSupervisor)
        throw new UnauthorizedException(
          'Você não tem permissão para criar um relatório de psicoterapia para este atendimento.',
        );
    }

    try {
      const [relatorioEvolucao] = await this.prisma.$transaction([
        this.prisma.prontuario.create({
          data: {
            id_Atendimento: CreateEvolucaoProntuarioDto.id_Sessao,

            conteudo: JSON.parse(
              JSON.stringify(CreateEvolucaoProntuarioDto.conteudo),
            ),

            id_Status: 1, // Em aprovação
            id_Tipo: 2, // Evolução
          },
        }),

        this.prisma.atendimento.update({
          where: { id_Atendimento: CreateEvolucaoProntuarioDto.id_Sessao },
          data: {
            id_Status: 2, // Em andamento
          },
        }),
      ]);

      return relatorioEvolucao;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro no banco de dados. Falha ao salvar o relatorio de psicoterapia. Tente novamente.',
      );
    }
  }

  async approveEvolucao(id: UUID, user: TokenDto) {
    const prontuario = await this.prisma.prontuario.findUnique({
      where: { id_Registro: id },
      include: {
        atendimento: {
          select: {
            id_Lista: true,
            id_Supervisor_Executor: true,
          },
        },
      },
    });

    if (!prontuario) throw new NotFoundException('Prontuário não encontrado.');
    if (prontuario.id_Tipo !== 2)
      throw new BadRequestException('Prontuário não é de registro em psicoterapia.');
    if (prontuario.id_Status !== 1)
      throw new BadRequestException('Registro de psicoterapia já foi aprovado.');
    if (user.access > 3)
      throw new UnauthorizedException(
        'Este usuário não tem permissão para aprovar registro de psicoterapia.',
      );
    if (
      !prontuario.atendimento ||
      !prontuario.atendimento.id_Supervisor_Executor
    )
      throw new InternalServerErrorException('Dados do atendimento inválidos.');
    if (
      user.access === 3 &&
      user.sub !== prontuario.atendimento.id_Supervisor_Executor
    )
      throw new UnauthorizedException(
        'Apenas o supervisor responsável pode aprovar este registro de psicoterapia.',
      );

    try {
      const [updatedProntuario] = await this.prisma.$transaction([
 
        this.prisma.prontuario.update({
          where: { id_Registro: id },
          data: {
            id_Status: 2, // Aprovado
          },
        }),

        this.prisma.atendimento.update({
          where: { id_Atendimento: prontuario.id_Atendimento },
          data: {
            id_Status: 3, // Concluido
          },
        }),
      ]);

      return updatedProntuario;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro no banco de dados. Falha ao aprovar o registro de psicoterapia. Tente novamente.',
      );
    }
  }
}
