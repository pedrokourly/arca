import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';
import { UpdateWaitlistDto } from './dto/update-waitlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'node:crypto';
import { validate as isUUID } from 'uuid';

@Injectable()
export class WaitlistService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateWaitlistDto) {
    // Verifica se há alguma entrada ativa com o mesmo CPF
    const existingActiveEntry = await this.prisma.listaEspera.findFirst({
      where: {
        CPF: body.CPF,
        id_Status: { in: [1, 2, 3, 4] }, // Em espera, Em triagem, Em psicoterapia
      },
    });

    if (existingActiveEntry)
      throw new BadRequestException(
        'Já existe uma entrada ativa na lista de espera com este CPF. Contate a equipe',
      );

    const newWaitlistEntry = await this.prisma.listaEspera.create({
      data: {
        nomeRegistro: body.nomeRegistro,
        nomeSocial: body.nomeSocial,
        dataNascimento: new Date(body.dataNascimento),
        CPF: body.CPF,
        telefonePessoal: body.telefonePessoal,
        contatoEmergencia: body.contatoEmergencia,
        enderecoRua: body.enderecoRua,
        enderecoNumero: body.enderecoNumero,
        enderecoBairro: body.enderecoBairro,
        enderecoCidade: body.enderecoCidade,
        enderecoEstado: body.enderecoEstado,
        enderecoCEP: body.enderecoCEP,
        id_Genero: body.id_Genero || 1, // Padrão: Masculino
        id_Etnia: body.id_Etnia || 1, // Padrão: Branca
        id_Escolaridade: body.id_Escolaridade || 1, // Padrão: Ensino Fundamental Incompleto
      },
    });

    return newWaitlistEntry;
  }

  async findAll() {
    const waitlistEntries = await this.prisma.listaEspera.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return waitlistEntries;
  }

  async findOne(id: UUID) {
    if (!isUUID(id)) {
      throw new BadRequestException('Formato de UUID inválido.');
    }

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
    });

    if (!waitlistEntry) {
      throw new NotFoundException('Paciente não encontrado na lista de espera.');
    }

    // Calcular a posição na lista
    // Conta quantas pessoas ativas foram criadas antes desta pessoa
    const posicaoNaLista = await this.prisma.listaEspera.count({
      where: {
        createdAt: {
          lt: waitlistEntry.createdAt, // Criadas antes desta entrada
        },
        id_Status: 1, // Apenas pessoas ativas
      },
    });

    // A posição é contagem + 1 (porque a contagem começa em 0)
    const posicao = posicaoNaLista + 1;

    return {
      ...waitlistEntry,
      posicaoNaLista: posicao,
      situacao: waitlistEntry.id_Status === 1 ? 'Ativo' : 'Inativo',
    };
  }

  async findPositions() {
    const waitlistEntries = await this.prisma.listaEspera.findMany({
      select: {
        createdAt: true,
      },
      where: {
        id_Status: 1,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const qntFila = waitlistEntries.length;

    if (qntFila === 0) {
      return {
        qntFila: 0,
        ultimaAtualizacao: new Date().toISOString(),
      };
    }

    // Última atualização baseada na entrada mais recente
    const ultimaEntrada = waitlistEntries[0]; // Primeiro elemento já que está ordenado por desc
    const ultimaAtualizacao = ultimaEntrada.createdAt.toISOString();

    return {
      qntFila,
      ultimaAtualizacao,
    };
  }

  async update(id: UUID, body: UpdateWaitlistDto) {
    if (!isUUID(id)) {
      throw new BadRequestException('Formato de UUID inválido.');
    }

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
    });

    if (!waitlistEntry) {
      throw new NotFoundException('Paciente não encontrado na lista de espera.');
    }

    try {
      const updatedWaitlistEntry = await this.prisma.listaEspera.update({
        where: { id_Lista: id },
        data: {
          ...body,
          dataNascimento: body.dataNascimento
            ? new Date(body.dataNascimento)
            : waitlistEntry.dataNascimento,
        },
      });

      return updatedWaitlistEntry;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao atualizar os dados do paciente.',
        error.message,
      );
    }
  }

  async remove(id: UUID) {
    if (!isUUID(id)) {
      throw new BadRequestException('Formato de UUID inválido.');
    }

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
    });

    if (!waitlistEntry) {
      throw new NotFoundException('Paciente não encontrado na lista de espera.');
    }
    if (waitlistEntry.id_Status === 7) {
      throw new BadRequestException(
        'Paciente já está desativado na lista de espera.',
      );
    }
    if (waitlistEntry.id_Status === 5 || waitlistEntry.id_Status === 6) {
      throw new BadRequestException(
        'Não é possível desativar um paciente que já recebeu alta ou foi encaminhado.',
      );
    }
    if (waitlistEntry.id_Status === 4) {
      throw new BadRequestException(
        'Não é possível desativar um paciente que está em psicoterapia.',
      );
    }
    if (waitlistEntry.id_Status === 3) {
      throw new BadRequestException(
        'Não é possível desativar um paciente que está em triagem.',
      );
    }
    if (waitlistEntry.id_Status === 2) {
      throw new BadRequestException(
        'Não é possível desativar um paciente que está em atendimento.',
      );
    }
    if (waitlistEntry.id_Status !== 1) {
      throw new BadRequestException(
        'Apenas pacientes com status "Em espera" podem ser desativados.',
      );
    }

    try {
      const deactivatedEntry = await this.prisma.listaEspera.update({
        where: { id_Lista: id },
        data: {
          id_Status: 7, // Desativado
        },
      });

      return deactivatedEntry;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao desativar o paciente da lista de espera.',
        error.message,
      );
    }
  }
}