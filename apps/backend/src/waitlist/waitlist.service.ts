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
    const newWaitlistEntry = await this.prisma.listaEspera.create({
      data: {
        nomeRegistro: body.nomeRegistro,
        nomeSocial: body.nomeSocial,
        dataNascimento: new Date(body.dataNascimento),
        telefonePessoal: body.telefonePessoal,
        contatoEmergencia: body.contatoEmergencia,
        enderecoRua: body.enderecoRua,
        enderecoNumero: body.enderecoNumero,
        enderecoBairro: body.enderecoBairro,
        enderecoCidade: body.enderecoCidade,
        enderecoEstado: body.enderecoEstado,
        enderecoCEP: body.enderecoCEP,
        id_Genero: body.id_Genero || 1, // Padrão: Masculino
        id_Etnia: body.id_etnia || 1, // Padrão: Branca
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
      throw new BadRequestException('Invalid UUID format');
    }

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
    });
    if (!waitlistEntry) {
      throw new NotFoundException('Waitlist entry not found');
    }

    // Calcular a posição na lista
    // Conta quantas pessoas ativas foram criadas antes desta pessoa
    const posicaoNaLista = await this.prisma.listaEspera.count({
      where: {
        createdAt: {
          lt: waitlistEntry.createdAt, // Criadas antes desta entrada
        },
        id_Status: 1,                  // Apenas pessoas ativas
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
      throw new BadRequestException('Invalid UUID format');
    }

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
    });

    if (!waitlistEntry) {
      throw new NotFoundException('Waitlist entry not found');
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
        'Error updating waitlist entry',
        error.message,
      );
    }
  }

  async remove(id: UUID) {
    if (!isUUID(id)) {
      throw new BadRequestException('Invalid UUID format');
    }

    const waitlistEntry = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: id },
    });

    if (!waitlistEntry) {
      throw new NotFoundException('Waitlist entry not found');
    }

    try {
      const deactivatedEntry = await this.prisma.listaEspera.update({
        where: { id_Lista: id },
        data: {
          id_Status: 5,
        },
      });

      return deactivatedEntry;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error deactivating waitlist entry',
        error.message,
      );
    }
  }
}
