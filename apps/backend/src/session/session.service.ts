import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { TokenDto } from './dto/token.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UUID } from 'node:crypto';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

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
      throw new BadRequestException('Paciente não encontrado.');
    }

    const statusFinais = [5, 6, 7]; // [Recebeu Alta, Encaminhado, Desativado]
    if (statusFinais.includes(paciente.id_Status)) {
      throw new BadRequestException(
        'Paciente está com status "Recebeu Alta", "Encaminhado" ou "Desativado" e não pode ter novas sessões agendadas.',
      );
    }

    if (session.id_Tipo_Atendimento !== 1 && session.id_Tipo_Atendimento !== 2) {
      throw new BadRequestException('Tipo de atendimento inválido.');
    }

    if (session.id_Tipo_Atendimento === 1) {
      // 1 = Triagem
      if (paciente.id_Status !== 1) {
        throw new BadRequestException(
          'Este paciente não está "Em Espera". Não é possível agendar uma nova triagem.',
        );
      }
    } else if (session.id_Tipo_Atendimento === 2) {
      // 2 = Psicoterapia
      // Se o paciente está tentando agendar Psicoterapia, ele DEVE ter o status "Em Triagem" (2) ou "Em Psicoterapia" (3)
      const statusPermitidos = [3, 4];

      if (!statusPermitidos.includes(paciente.id_Status)) {
        // Se ele ainda está "Em Espera" (1), ele precisa da triagem primeiro
        if (paciente.id_Status === 1) {
          throw new BadRequestException(
            'Paciente precisa passar pela triagem antes de agendar uma sessão de psicoterapia.',
          );
        }
        if (paciente.id_Status === 2) {
          throw new BadRequestException(
            'Paciente está em triagem. A triagem precisa ser aprovada antes de agendar uma sessão de psicoterapia.',
          );
        }

        throw new BadRequestException(
          'Paciente não está apto para agendar uma sessão de psicoterapia.',
        );
      }
    }

    // Verifica se o estagiário existe
    const estagiario = await this.prisma.usuario.findUnique({
      where: { id_User: session.id_Estagiario_Executor },
    });
    if (!estagiario) {
      throw new BadRequestException('Estagiário não encontrado.');
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
      throw new BadRequestException('Supervisor não encontrado.');
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
        id_Status: 1, // Apenas sessões agendadas
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

    let updateListaEsperaPromise: Prisma.PrismaPromise<any> | null = null;

    if (session.id_Tipo_Atendimento === 1) {
      updateListaEsperaPromise = this.prisma.listaEspera.update({
        where: { id_Lista: session.id_Lista },
        data: { id_Status: 2 }, // Status "Em Triagem"
      });
    } else if (session.id_Tipo_Atendimento === 2 && paciente.id_Status === 3) {
      updateListaEsperaPromise = this.prisma.listaEspera.update({
        where: { id_Lista: session.id_Lista },
        data: { id_Status: 4 }, // Status "Em Psicoterapia"
      });
    }
    
    // Cria um array para a transação
    const queries: Prisma.PrismaPromise<any>[] = [
      // 1. Cria a sessão
      this.prisma.atendimento.create({
        data: {
          dataHoraInicio: session.dataHoraInicio,
          dataHoraFim: session.dataHoraFim,
          id_Tipo_Atendimento: session.id_Tipo_Atendimento,
          id_Lista: session.id_Lista,
          id_Estagiario_Executor: session.id_Estagiario_Executor,
          id_Supervisor_Executor: session.id_Supervisor_Executor,
          observacoes: session.observacoes,
        },
      }),
    ];

    // 2. Adiciona a atualização de status (se houver)
    if (updateListaEsperaPromise) {
      queries.push(updateListaEsperaPromise);
    }
    
    // Executa as queries em transação
    const [createdSession] = await this.prisma.$transaction(queries);
    
    return createdSession;
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
      Prontuario: {
        select: {
          id_Registro: true,
          id_Status: true,
          id_Tipo: true,
          dataEmissao: true,
          conteudo: true,
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
    throw new ForbiddenException('Você não tem permissão para ver sessões.');
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
      Prontuario: {
        select: {
          id_Registro: true,
          id_Status: true,
          id_Tipo: true,
          dataEmissao: true,
          conteudo: true,
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
      throw new NotFoundException('Sessão não encontrada.');
    } else if (user.access > 2) {
      if (user.access === 3 && session.id_Supervisor_Executor !== user.sub) {
        throw new ForbiddenException(
          'Você não tem permissão para ver essa sessão.',
        );
      } else if (
        user.access === 4 &&
        session.id_Estagiario_Executor !== user.sub
      ) {
        throw new ForbiddenException(
          'Você não tem permissão para ver essa sessão.',
        );
      }
    }

    return session;
  }

  async findAllWithNoSession(user: TokenDto) {
    if (user.access > 2) throw new ForbiddenException('Você não tem permissão para ver essa lista.');

    return this.prisma.listaEspera.findMany({
    where: {
      id_Status: {
        in: [3, 4], // Status 3 = "Triagem Aprovada", Status 4 = "Psicoterapia em andamento"
      },


      NOT: {
        Atendimento: {
          some: {
            id_Tipo_Atendimento: 2, // Tipo 2 = Psicoterapia
            id_Status: 1,           // Status 1 = Ativo
          },
        },
      },
    },
    select: {
      id_Lista: true,
      nomeRegistro: true,
      nomeSocial: true,
      Status: {
        select: { nome: true },
      },
    },
  });
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
      throw new NotFoundException('Sessão não encontrada.');
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
    if (
      updateSessionDto.dataHoraInicio < now ||
      updateSessionDto.dataHoraFim < now
    ) {
      throw new BadRequestException(
        'O horário de início e término não podem ser em datas passadas.',
      );
    }

    // Verifica se o estagiário já possui uma sessão no mesmo horário
    const overlappingSession = await this.prisma.atendimento.findFirst({
      where: {
        id_Status: 1, // Apenas sessões agendadas
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
      },
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
      include: { ListaEspera: true },
    });
    if (!session) {
      throw new NotFoundException('Sessão não encontrada.');
    }

    if (session.id_Status !== 1) { 
      throw new BadRequestException(
        'Não é possível cancelar uma sessão que já está em andamento (2), concluída (3) ou que já foi cancelada (4).',
      );
    }

  let updateListaEsperaPromise: Prisma.PrismaPromise<any> | null = null;
  if (session.id_Tipo_Atendimento === 1) {
    // Se cancelou uma triagem, paciente volta para "Em espera"
    updateListaEsperaPromise = this.prisma.listaEspera.update({
      where: { id_Lista: session.id_Lista },
      data: { id_Status: 1 }, // Status "Em espera"
    });
    
  } else if (session.id_Tipo_Atendimento === 2) {

    const hasOtherPsicoterapia = await this.prisma.prontuario.findFirst({
      where: {
        atendimento: {
          id_Lista: session.id_Lista,
          NOT: {
            id_Atendimento: id,
          },
        },
        id_Tipo: 2,   // Psicoterapia
        id_Status: 2, // Aprovado
      },
    });

    if (!hasOtherPsicoterapia) {
      updateListaEsperaPromise = this.prisma.listaEspera.update({
        where: { id_Lista: session.id_Lista },
        data: { id_Status: 3 }, // Status "Triagem aprovada"
      });
    }
    
  }

    
    const queries: Prisma.PrismaPromise<any>[] = [
      this.prisma.atendimento.update({
        where: { id_Atendimento: id },
        data: { id_Status: 4 }, // Status "Cancelado"
      }),
    ];

    if (updateListaEsperaPromise) {
      queries.push(updateListaEsperaPromise);
    }
    
    await this.prisma.$transaction(queries);

    return { message: `Sessão (${id}) cancelada com sucesso.` };
  }
}
