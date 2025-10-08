import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { TokenDto } from './dto/token.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'node:crypto';

@Injectable()
export class SessionService {
  constructor(
    private prisma: PrismaService
  ){}

  async create(session: CreateSessionDto, user: TokenDto) {

    // Verifica se o usuário tem permissão para criar uma sessão
    if (user.access > 2) {
      throw new ForbiddenException(
        'Você não tem permissão para criar uma sessão.',
      );
    }

    // Verifica se o paciente existe
    const paciente = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: session.id_Lista },
    });
    if (!paciente) {
      throw new BadRequestException(
      'Paciente não encontrado.',
      );
    }

    // Verifica se o status do paciente está como "Aguardando Atendimento" (status 1)
    if (paciente.id_Status !== 1) {
      throw new BadRequestException(
      'O paciente não está disponível para atendimento.',
      );
    }

    // Verifica se o estagiário existe
    const estagiario = await this.prisma.usuario.findUnique({
      where: { id_User: session.id_Estagiario_Executor },
    });
    if (!estagiario) {
      throw new BadRequestException(
        'Estagiário não encontrado.',
      );
    } else if (estagiario.roleId !== 4) {
      throw new BadRequestException(
        'O usuário designado como estagiário não possui o papel de estagiário.',
      );
    }

    // Verifica se o supervisor existe
    const supervisor = await this.prisma.usuario.findUnique({
      where: { id_User: session.id_Supervisor_Executor },
    });
    if (!supervisor) {
      throw new BadRequestException(
        'Supervisor não encontrado.',
      );
    } else if (supervisor.roleId !== 3) {
      throw new BadRequestException(
        'O usuário designado como supervisor não possui o papel de supervisor.',
      );
    }

    // Verifica se horario de início é anterior ao horário de término
    if (session.dataHoraInicio >= session.dataHoraFim) {
      throw new BadRequestException(
        'O horário de início deve ser anterior ao horário de término.',
      );
    }

    // Verifica se o horario de início e término não são em datas passadas
    const now = new Date();
    if (session.dataHoraInicio < now || session.dataHoraFim < now) {
      throw new BadRequestException(
        'O horário de início e término não podem ser em datas passadas.',
      );
    }

    // Verifica se o estagiário já possui uma sessão no mesmo horário
    const overlappingSession = await this.prisma.atendimento.findFirst({
      where: {
        id_Estagiario_Executor: session.id_Estagiario_Executor,
        OR: [
          {
            dataHoraInicio: {
              lte: session.dataHoraInicio,
            },
            dataHoraFim: {
              gte: session.dataHoraInicio,
            },
          },
          {
            dataHoraInicio: {
              lte: session.dataHoraFim,
            },
            dataHoraFim: {
              gte: session.dataHoraFim,
            },
          },
          {
            dataHoraInicio: {
              gte: session.dataHoraInicio,
            },
            dataHoraFim: {
              lte: session.dataHoraFim,
            },
          },
        ],
      },
    });

    if (overlappingSession) {
      throw new BadRequestException(
        'O estagiário já possui uma sessão agendada nesse horário.',
      );
    }

    // Cria a sessão
    const Session = await this.prisma.atendimento.create({
      data: {
        dataHoraInicio: session.dataHoraInicio,
        dataHoraFim: session.dataHoraFim,
        id_Lista: session.id_Lista,
        id_Estagiario_Executor: session.id_Estagiario_Executor,
        id_Supervisor_Executor: session.id_Supervisor_Executor,
        observacoes: session.observacoes,
      }
    });

    // Atualiza o status do paciente na lista de espera para "Em Atendimento" (status 2)
    await this.prisma.listaEspera.update({
      where: { id_Lista: session.id_Lista },
      data: {
        id_Status: 2, // Status "Em Atendimento"
      }
    });

    return Session;
  }

  async findAll(user: TokenDto) {
    const includeRelations = {
      ListaEspera: {
        select: {
          id_Lista: true,
          nomeRegistro: true,
          nomeSocial: true,
          telefonePessoal: true,
        },
      },
      estagiarioExecutor: {
        select: {
          id_User: true,
          nome: true,
          email: true,
        },
      },
      supervisorExecutor: {
        select: {
          id_User: true,
          nome: true,
          email: true,
        },
      },
      status: {
        select: {
          id_Status: true,
          nome: true,
        },
      },
    };

    // Se o usuário for secretario ou admin, lista todas as sessões
    if (user.access <= 2) {
      return this.prisma.atendimento.findMany({
        include: includeRelations,
        orderBy: {
          dataHoraInicio: 'desc',
        },
      });
    }

    // Se o usuário for supervisor, lista todas as sessões que ele supervisiona
    if (user.access === 3) {
      return this.prisma.atendimento.findMany({
        where: {
          id_Supervisor_Executor: user.sub,
        },
        include: includeRelations,
        orderBy: {
          dataHoraInicio: 'desc',
        },
      });
    }

    // Se o usuário for estagiário, lista todas as sessões que ele executa
    if (user.access === 4) {
      return this.prisma.atendimento.findMany({
        where: {
          id_Estagiario_Executor: user.sub,
        },
        include: includeRelations,
        orderBy: {
          dataHoraInicio: 'desc',
        },
      });
    }

    // Se o usuário for de outro nível, não tem permissão para ver sessões
    throw new ForbiddenException(
      'Você não tem permissão para ver sessões.',
    );
  }

  async findOne(id: UUID, user: TokenDto) {
    const includeRelations = {
      ListaEspera: {
        select: {
          id_Lista: true,
          nomeRegistro: true,
          nomeSocial: true,
          telefonePessoal: true,
        },
      },
      estagiarioExecutor: {
        select: {
          id_User: true,
          nome: true,
          email: true,
        },
      },
      supervisorExecutor: {
        select: {
          id_User: true,
          nome: true,
          email: true,
        },
      },
      status: {
        select: {
          id_Status: true,
          nome: true,
        },
      },
    };

    // Verifica se a sessão existe
    const session = await this.prisma.atendimento.findUnique({
      where: { id_Atendimento: id },
      include: includeRelations,
    });

    // Verifica se o usuario tem permissão para ver a sessão
    if (!session) {
      throw new NotFoundException(
        'Sessão não encontrada.'
      );
    } else if (user.access > 2) {
      if (user.access === 3 && session.id_Supervisor_Executor !== user.sub) {
        throw new ForbiddenException(
          'Você não tem permissão para ver essa sessão.',
        );
      } else if (user.access === 4 && session.id_Estagiario_Executor !== user.sub) {
        throw new ForbiddenException(
          'Você não tem permissão para ver essa sessão.',
        );
      }
    }

    return session;
  }

  async update(id: UUID, updateSessionDto: UpdateSessionDto, user: TokenDto) {

    // Verifica se o usuário tem permissão para atualizar uma sessão
    if (user.access > 2) {
      throw new ForbiddenException(
        'Você não tem permissão para atualizar uma sessão.',
      );
    }

    const session = await this.prisma.atendimento.findUnique({
      where: { id_Atendimento: id },
    });

    // Verifica se a sessão existe
    if (!session) {
      throw new NotFoundException(
        'Sessão não encontrada.'
      );
    }

    // Verifica se horario de início é anterior ao horário de término
    if (
      updateSessionDto.dataHoraInicio === undefined ||
      updateSessionDto.dataHoraFim === undefined
    ) {
      throw new BadRequestException(
        'Horário de início e término devem ser informados.',
      );
    }

    if (updateSessionDto.dataHoraInicio >= updateSessionDto.dataHoraFim) {
      throw new BadRequestException(
        'O horário de início deve ser anterior ao horário de término.',
      );
    }

    // Verifica se o horario de início e término não são em datas passadas
    const now = new Date();
    if (updateSessionDto.dataHoraInicio < now || updateSessionDto.dataHoraFim < now) {
      throw new BadRequestException(
        'O horário de início e término não podem ser em datas passadas.',
      );
    }

    // Verifica se o estagiário já possui uma sessão no mesmo horário
    const overlappingSession = await this.prisma.atendimento.findFirst({
      where: {
        id_Estagiario_Executor: session.id_Estagiario_Executor,
        NOT: {
          id_Atendimento: id,
        },
        OR: [
          {
            dataHoraInicio: {
              lte: updateSessionDto.dataHoraInicio,
            },
            dataHoraFim: {
              gte: updateSessionDto.dataHoraInicio,
            },
          },
          {
            dataHoraInicio: {
              lte: updateSessionDto.dataHoraFim,
            },
            dataHoraFim: {
              gte: updateSessionDto.dataHoraFim,
            },
          },
          {
            dataHoraInicio: {
              gte: updateSessionDto.dataHoraInicio,
            },
            dataHoraFim: {
              lte: updateSessionDto.dataHoraFim,
            },
          },
        ],
      },
    });

    if (overlappingSession) {
      throw new BadRequestException(
        'O estagiário já possui uma sessão agendada nesse horário.',
      );
    }

    // Atualiza a sessão
    return this.prisma.atendimento.update({
      where: { id_Atendimento: id },
      data: {
        dataHoraInicio: updateSessionDto.dataHoraInicio,
        dataHoraFim: updateSessionDto.dataHoraFim,
        observacoes: updateSessionDto.observacoes,
      }
    });
  }

  async updateStatus(id: UUID, status: number, user: TokenDto) {

    // Verifica se o usuário tem permissão para atualizar uma sessão
    if (user.access > 2) {
      throw new ForbiddenException(
        'Você não tem permissão para atualizar o status de uma sessão.',
      );
    }

    // Verifica se a sessão existe
    const session = await this.prisma.atendimento.findUnique({
      where: { id_Atendimento: id },
    });

    if (!session) {
      throw new NotFoundException(
        'Sessão não encontrada.'
      );
    }

    // Verifica se o status é válido
    const validStatuses = [2, 3, 4]; // 2: Em andamento, 3: Concluido, 4: Faltou
    if (!validStatuses.includes(status)) {
      throw new BadRequestException(
        'Status inválido.'
      );
    }

    // Atualiza o status da sessão
    return this.prisma.atendimento.update({
      where: { id_Atendimento: id },
      data: { id_Status: status }
    });
  }

  async remove(id: UUID, user: TokenDto) {
    // Verifica se o usuário tem permissão para deletar uma sessão
    if (user.access > 2) {
      throw new ForbiddenException(
        'Você não tem permissão para cancelar uma sessão.',
      );
    }

    // Verifica se a sessão existe
    const session = await this.prisma.atendimento.findUnique({
      where: { id_Atendimento: id },
    });
    if (!session) {
      throw new NotFoundException(
        'Sessão não encontrada.'
      );
    }

    // Deleta a sessão
    await this.prisma.atendimento.update({
      where: { id_Atendimento: id },
      data: { id_Status: 5 } // Status "Cancelado"
    });

    await this.prisma.listaEspera.update({
      where: { id_Lista: session.id_Lista },
      data: {
        id_Status: 1, // Status "Em espera"
      }
    });
    return { message: `Sessão de UUID ${id} cancelada com sucesso.` };
  }
}
