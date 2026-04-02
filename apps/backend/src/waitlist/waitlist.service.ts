import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';
import { UpdateWaitlistDto } from './dto/update-waitlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'node:crypto';
import { StatusListaEspera } from 'src/common/enums/status.enum';

@Injectable()
export class WaitlistService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateWaitlistDto) {

    const existingActiveEntry = await this.prisma.listaEspera.findFirst({
      where: {
        CPF: body.CPF,
        id_Status: { in: [
          StatusListaEspera.EM_ESPERA, 
          StatusListaEspera.EM_TRIAGEM, 
          StatusListaEspera.TRIAGEM_APROVADA, 
          StatusListaEspera.EM_PSICOTERAPIA
        ] },
      },
    });

    if (existingActiveEntry)
      throw new BadRequestException('Já existe uma entrada ativa na lista de espera com este CPF. Contate a equipe');

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

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
    });

    if (!waitlistEntry) {
      throw new NotFoundException('Paciente não encontrado na lista de espera.');
    }

    const posicaoNaLista = await this.prisma.listaEspera.count({
      where: {
        createdAt: {
          lt: waitlistEntry.createdAt,
        },
        id_Status: StatusListaEspera.EM_ESPERA,
      },
    });

    const posicao = posicaoNaLista + 1;

    return {
      ...waitlistEntry,
      posicaoNaLista: posicao,
      situacao: waitlistEntry.id_Status === StatusListaEspera.EM_ESPERA ? 'Ativo' : 'Inativo',
    };
  }

  async findPublicPosition(id: UUID) {

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
      select: {
        id_Lista: true,
        nomeRegistro: true,
        nomeSocial: true,
        createdAt: true,
        id_Status: true,
      },
    });

    if (!waitlistEntry) {
      throw new NotFoundException('Paciente não encontrado na lista de espera.');
    }

    const posicaoNaLista = await this.prisma.listaEspera.count({
      where: {
        createdAt: { lt: waitlistEntry.createdAt },
        id_Status: StatusListaEspera.EM_ESPERA,
      },
    });

    return {
      ...waitlistEntry,
      posicaoNaLista: posicaoNaLista + 1,
      situacao: waitlistEntry.id_Status === StatusListaEspera.EM_ESPERA ? 'Ativo' : 'Inativo',
    };
  }

  async findPositions() {
    const waitlistEntries = await this.prisma.listaEspera.findMany({
      select: {
        createdAt: true,
      },
      where: {
        id_Status: StatusListaEspera.EM_ESPERA,
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
          dataNascimento: body.dataNascimento ? new Date(body.dataNascimento) : waitlistEntry.dataNascimento,
        },
      });

      return updatedWaitlistEntry;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao atualizar os dados do paciente.', error.message);
    }
  }

  async remove(id: UUID) {

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
    });

    if (!waitlistEntry) {
      throw new NotFoundException('Paciente não encontrado na lista de espera.');
    }
    if (waitlistEntry.id_Status === StatusListaEspera.DESATIVADO) {
      throw new BadRequestException('Paciente já está desativado na lista de espera.');
    }
    if (waitlistEntry.id_Status === StatusListaEspera.RECEBEU_ALTA || waitlistEntry.id_Status === StatusListaEspera.ENCAMINHADO) {
      throw new BadRequestException('Não é possível desativar um paciente que já recebeu alta ou foi encaminhado.');
    }
    if (waitlistEntry.id_Status === StatusListaEspera.EM_PSICOTERAPIA) {
      throw new BadRequestException('Não é possível desativar um paciente que está em psicoterapia.');
    }
    if (waitlistEntry.id_Status === StatusListaEspera.TRIAGEM_APROVADA) {
      throw new BadRequestException('Não é possível desativar um paciente que está em triagem.');
    }
    if (waitlistEntry.id_Status === StatusListaEspera.EM_TRIAGEM) {
      throw new BadRequestException('Não é possível desativar um paciente que está em atendimento.');
    }
    if (waitlistEntry.id_Status !== StatusListaEspera.EM_ESPERA) {
      throw new BadRequestException('Apenas pacientes com status "Em espera" podem ser desativados.');
    }

    try {
      const deactivatedEntry = await this.prisma.listaEspera.update({
        where: { id_Lista: id },
        data: {
          id_Status: StatusListaEspera.DESATIVADO,
        },
      });

      return deactivatedEntry;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao desativar o paciente da lista de espera.', error.message);
    }
  }
}
