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
        id_CorPele: body.id_CorPele || 1, // Padrão: Branca
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
    return waitlistEntry;
  }

  async findPositions() {
    const waitlistEntries = await this.prisma.listaEspera.findMany({
      select: {
        createdAt: true,
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

    return await this.prisma.listaEspera.delete({
      where: { id_Lista: id },
    });
  }
}
