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
import { Prisma } from '@prisma/client';
import { UUID } from 'node:crypto';
import { ConteudoTriagemDto } from './dto/conteudo-triagem.dto';
import { ConteudoEvolucaoDto } from './dto/conteudo-evolucao.dto';
import { CreateEncaminhamentoDto } from './dto/create-encaminhamento.dto';
import { CreateAltaDto } from './dto/create-alta.dtos';

@Injectable()
export class MedicalRecordService {
  constructor(private prisma: PrismaService) {}

  async createTriagem(CreateTriagemProntuarioDto: CreateTriagemProntuarioDto, user: TokenDto) {
    const atendimento = await this.prisma.atendimento.findFirst({
      where: { id_Atendimento: CreateTriagemProntuarioDto.id_Sessao },
      include: {
        ListaEspera: true,
      },
    });
    if (!atendimento) throw new NotFoundException('Atendimento não encontrado.');
    if (atendimento?.id_Tipo_Atendimento !== 1) throw new BadRequestException('Atendimento não é de triagem.');
    if (atendimento.id_Status !== 1) throw new BadRequestException('Atendimento não está ativo ou já foi concluido.');
    if (atendimento.ListaEspera?.id_Status !== 2)
      throw new BadRequestException(
        'Paciente ja possuí triagem concluída ou em andamento. Não é possível criar outra triagem.',
      );
    if (atendimento.id_Estagiario_Executor === null || atendimento.id_Supervisor_Executor === null) {
      throw new InternalServerErrorException('Estagiário ou supervisor não atribuídos para este atendimento.');
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

            conteudo: JSON.parse(JSON.stringify(CreateTriagemProntuarioDto.conteudo)),

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
      throw new InternalServerErrorException('Erro no banco de dados. Falha ao salvar a triagem. Tente novamente.');
    }
  }

  async putTriagem(id: UUID, ConteudoTriagemDto: ConteudoTriagemDto, user: TokenDto) {
    const prontuario = await this.prisma.prontuario.findUnique({
      where: { id_Registro: id },
      include: {
        atendimento: {
          select: {
            id_Lista: true,
            id_Supervisor_Executor: true,
            id_Estagiario_Executor: true,
          },
        },
      },
    });

    if (!prontuario) throw new NotFoundException('Registro não encontrado.');
    if (prontuario.id_Tipo !== 1) throw new BadRequestException('Registro não é de triagem.');
    if (prontuario.id_Status !== 1)
      throw new BadRequestException('Triagem já foi aprovada, não é possível alterar os dados.');

    if (!prontuario.atendimento || !prontuario.atendimento.id_Supervisor_Executor)
      throw new InternalServerErrorException('Dados do atendimento inválidos.');

    if (user.access === 3 && user.sub !== prontuario.atendimento.id_Supervisor_Executor)
      throw new UnauthorizedException('Apenas o supervisor responsável pode editar essa triagem.');

    if (user.access === 4 && user.sub !== prontuario.atendimento.id_Estagiario_Executor)
      throw new UnauthorizedException('Apenas o supervisor responsável pode editar essa triagem.');

    return await this.prisma.prontuario.update({
      where: { id_Registro: id },
      data: {
        conteudo: JSON.parse(JSON.stringify(ConteudoTriagemDto)),
      },
    });
  }

  async approveTriagem(id: UUID, createEncaminhamentoDto: CreateEncaminhamentoDto, user: TokenDto) {
    const prontuario = await this.prisma.prontuario.findUnique({
      where: { id_Registro: id },
      include: {
        atendimento: {
          select: {
            id_Lista: true,
            id_Supervisor_Executor: true,
            id_Atendimento: true,
          },
        },
      },
    });

    if (!prontuario) throw new NotFoundException('Registro não encontrado.');
    if (prontuario.id_Tipo !== 1) throw new BadRequestException('Registro não é de triagem.');
    if (prontuario.id_Status !== 1) throw new BadRequestException('Triagem já foi aprovada.');
    if (user.access > 3) throw new UnauthorizedException('Este usuário não tem permissão para aprovar triagens.');
    if (!prontuario.atendimento || !prontuario.atendimento.id_Supervisor_Executor)
      throw new InternalServerErrorException('Dados do atendimento inválidos.');
    if (user.access === 3 && user.sub !== prontuario.atendimento.id_Supervisor_Executor)
      throw new UnauthorizedException('Apenas o supervisor responsável pode aprovar esta triagem.');

    const transactionPromises: Prisma.PrismaPromise<any>[] = [];

    transactionPromises.push(
      this.prisma.prontuario.update({
        where: { id_Registro: id },
        data: {
          id_Status: 2, // Aprovado
        },
      }),
    );

    transactionPromises.push(
      this.prisma.atendimento.update({
        where: { id_Atendimento: prontuario.id_Atendimento },
        data: {
          id_Status: 3, // Concluido
        },
      }),
    );

    if (createEncaminhamentoDto.encaminhado) {
      const { instituicaoEncaminhada, motivoEncaminhamento } = createEncaminhamentoDto;
      if (!instituicaoEncaminhada || instituicaoEncaminhada.trim() === '') {
        throw new BadRequestException(
          'O campo instituicaoEncaminhada é obrigatório quando "encaminhado" é verdadeiro.',
        );
      }
      if (!motivoEncaminhamento || motivoEncaminhamento.trim() === '') {
        throw new BadRequestException('O campo motivoEncaminhamento é obrigatório quando "encaminhado" é verdadeiro.');
      }

      transactionPromises.push(
        this.prisma.listaEspera.update({
          where: { id_Lista: prontuario.atendimento.id_Lista },
          data: {
            id_Status: 6, // Encaminhado
          },
        }),
      );

      transactionPromises.push(
        this.prisma.prontuario.create({
          data: {
            id_Atendimento: prontuario.id_Atendimento,
            conteudo: {
              instituicaoEncaminhada: createEncaminhamentoDto.instituicaoEncaminhada,
              motivoEncaminhamento: createEncaminhamentoDto.motivoEncaminhamento,
            },
            id_Status: 2, // Aprovado
            id_Tipo: 4, // Encaminhamento
          },
        }),
      );
    } else {
      transactionPromises.push(
        this.prisma.listaEspera.update({
          where: { id_Lista: prontuario.atendimento.id_Lista },
          data: {
            id_Status: 3, // Triagem aprovada
          },
        }),
      );
    }

    try {
      await this.prisma.$transaction(transactionPromises);

      return createEncaminhamentoDto.encaminhado
        ? 'Paciente encaminhado com sucesso.'
        : 'Triagem aprovada com sucesso.';
    } catch (error) {
      throw new InternalServerErrorException('Erro no banco de dados. Falha ao aprovar a triagem. Tente novamente.');
    }
  }

  async createEvolucao(CreateEvolucaoProntuarioDto: CreateEvolucaoProntuarioDto, user: TokenDto) {
    const atendimento = await this.prisma.atendimento.findFirst({
      where: { id_Atendimento: CreateEvolucaoProntuarioDto.id_Sessao },
      include: {
        ListaEspera: true,
      },
    });
    if (!atendimento) throw new NotFoundException('Atendimento não encontrado.');
    if (atendimento?.id_Tipo_Atendimento !== 2)
      // Psicoterapia
      throw new BadRequestException('Atendimento não é de psicoterapia');
    if (atendimento.id_Status !== 1)
      // Ativo
      throw new BadRequestException('Atendimento não está ativo ou já foi concluido.');

    const status = atendimento.ListaEspera?.id_Status;
    if (status !== 3 && status !== 4)
      // Triagem aprovada ou Psicoterapia em andamento
      throw new BadRequestException(
        'Paciente não possuí triagem aprovada. Não é possível criar um registro de psicoterapia.',
      );
    if (atendimento.id_Estagiario_Executor === null || atendimento.id_Supervisor_Executor === null) {
      throw new InternalServerErrorException('Estagiário ou supervisor não atribuídos para este atendimento.');
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

            conteudo: JSON.parse(JSON.stringify(CreateEvolucaoProntuarioDto.conteudo)),

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

  async putEvolucao(id: UUID, ConteudoEvolucaoDto: ConteudoEvolucaoDto, user: TokenDto) {
    const prontuario = await this.prisma.prontuario.findUnique({
      where: { id_Registro: id },
      include: {
        atendimento: {
          select: {
            id_Lista: true,
            id_Supervisor_Executor: true,
            id_Estagiario_Executor: true,
          },
        },
      },
    });

    if (!prontuario) throw new NotFoundException('Registro não encontrado.');
    if (prontuario.id_Tipo !== 2) throw new BadRequestException('Registro não é de triagem.');
    if (prontuario.id_Status !== 1)
      throw new BadRequestException('Registro de evolução já foi aprovado, não é possível alterar os dados.');

    if (!prontuario.atendimento || !prontuario.atendimento.id_Supervisor_Executor)
      throw new InternalServerErrorException('Dados do atendimento inválidos.');

    if (user.access === 3 && user.sub !== prontuario.atendimento.id_Supervisor_Executor)
      throw new UnauthorizedException('Apenas o supervisor responsável pode editar esse registro de evolução.');

    if (user.access === 4 && user.sub !== prontuario.atendimento.id_Estagiario_Executor)
      throw new UnauthorizedException('Apenas o supervisor responsável pode editar esse registro de evolução.');

    return await this.prisma.prontuario.update({
      where: { id_Registro: id },
      data: {
        conteudo: JSON.parse(JSON.stringify(ConteudoEvolucaoDto)),
      },
    });
  }

  async approveEvolucao(id: UUID, createAltaDto: CreateAltaDto, user: TokenDto) {
    const prontuario = await this.prisma.prontuario.findUnique({
      where: { id_Registro: id },
      include: {
        atendimento: {
          select: {
            id_Lista: true,
            id_Supervisor_Executor: true,
            id_Atendimento: true,
          },
        },
      },
    });

    if (!prontuario) throw new NotFoundException('Registro não encontrado.');
    if (prontuario.id_Tipo !== 2) throw new BadRequestException('Registro não é de registro em psicoterapia.');
    if (prontuario.id_Status !== 1) throw new BadRequestException('Registro de psicoterapia já foi aprovado.');
    if (user.access > 3)
      throw new UnauthorizedException('Este usuário não tem permissão para aprovar registro de psicoterapia.');
    if (!prontuario.atendimento || !prontuario.atendimento.id_Supervisor_Executor)
      throw new InternalServerErrorException('Dados do atendimento inválidos.');
    if (user.access === 3 && user.sub !== prontuario.atendimento.id_Supervisor_Executor)
      throw new UnauthorizedException('Apenas o supervisor responsável pode aprovar este registro de psicoterapia.');


    const transactionPromises: Prisma.PrismaPromise<any>[] = [];
    let altaCriada = false;
    let encaminhamentoCriado = false;

    transactionPromises.push(
      this.prisma.prontuario.update({
        where: { id_Registro: id },
        data: {
          id_Status: 2, // Aprovado
        },
      }),
    );

    transactionPromises.push(
      this.prisma.atendimento.update({
        where: { id_Atendimento: prontuario.id_Atendimento },
        data: {
          id_Status: 3, // Concluido
        },
      }),
    );


    if (createAltaDto.recebeuAlta) {
      const { finalidade } = createAltaDto;
      if (!finalidade || finalidade.trim() === '') {
        throw new BadRequestException('O campo finalidade é obrigatório quando "recebeuAlta" é verdadeiro.');
      }

      transactionPromises.push(
        this.prisma.prontuario.create({
          data: {
            id_Atendimento: prontuario.id_Atendimento,
            conteudo: { finalidade: finalidade },
            id_Status: 2,
            id_Tipo: 3, // Alta
          },
        }),
      );

      altaCriada = true;
      transactionPromises.push(
        this.prisma.listaEspera.update({
          where: { id_Lista: prontuario.atendimento.id_Lista },
          data: {
            id_Status: 5, // Recebeu alta
          },
        }),
      );
    }


    if (createAltaDto.encaminhado) {
      const { instituicaoEncaminhada, motivoEncaminhamento } = createAltaDto;
      if (!instituicaoEncaminhada || instituicaoEncaminhada.trim() === '') {
        throw new BadRequestException(
          'O campo instituicaoEncaminhada é obrigatório quando "encaminhado" é verdadeiro.',
        );
      }
      if (!motivoEncaminhamento || motivoEncaminhamento.trim() === '') {
        throw new BadRequestException('O campo motivoEncaminhamento é obrigatório quando "encaminhado" é verdadeiro.');
      }

      transactionPromises.push(
        this.prisma.prontuario.create({
          data: {
            id_Atendimento: prontuario.id_Atendimento,
            conteudo: {
              instituicaoEncaminhada: instituicaoEncaminhada,
              motivoEncaminhamento: motivoEncaminhamento,
            },
            id_Status: 2, 
            id_Tipo: 4, // Encaminhamento
          },
        }),
      );
      encaminhamentoCriado = true;
    }



    try {
      await this.prisma.$transaction(transactionPromises);


      if (altaCriada && encaminhamentoCriado) {
        return 'Evolução aprovada. Alta e Encaminhamento gerados com sucesso.';
      } else if (altaCriada) {
        return 'Evolução aprovada. Relatório de Alta gerado com sucesso.';
      } else if (encaminhamentoCriado) {
        return 'Evolução aprovada. Encaminhamento gerado com sucesso.';
      } else {
        return 'Evolução aprovada com sucesso.'; // Caso só aprove a sessão
      }
    } catch (error) {
      throw new InternalServerErrorException('Erro no banco de dados. Falha ao aprovar a evolução. Tente novamente.');
    }
  }

  async findAll(user: TokenDto) {
    let whereCondition: Prisma.ListaEsperaWhereInput = {
      Atendimento: {
        some: {
          Prontuario: {
            // 'Prontuario' é o nome da relação no schema
            some: {},
          },
        },
      },
    };

    let includeAtendimentos: Prisma.AtendimentoFindManyArgs = {
      where: {
        Prontuario: {
          some: {},
        },
      },

      select: {
        Prontuario: {
          select: {
            id_Registro: true,
            conteudo: true,
            dataEmissao: true,
            id_Status: true,
            id_Tipo: true,
            ultimaAtualizacao: true,
          },
          orderBy: {
            dataEmissao: 'asc', // Ordena os registros do paciente do mais antigo para o mais novo
          },
        },
      },
    };

    if (user.access === 3) {
      // Supervisor
      // Filtra a lista de pacientes
      if (whereCondition.Atendimento?.some) {
        whereCondition.Atendimento.some.id_Supervisor_Executor = user.sub;
      }
      // Filtra TAMBÉM os atendimentos/registros incluídos
      if (includeAtendimentos.where) {
        includeAtendimentos.where.id_Supervisor_Executor = user.sub;
      }
    } else if (user.access === 4) {
      // Estagiário
      // Filtra a lista de pacientes
      if (whereCondition.Atendimento?.some) {
        whereCondition.Atendimento.some.id_Estagiario_Executor = user.sub;
      }
      // Filtra TAMBÉM os atendimentos/registros incluídos
      if (includeAtendimentos.where) {
        includeAtendimentos.where.id_Estagiario_Executor = user.sub;
      }
    } else if (user.access > 4) {
      return []; // Nível de acesso inválido
    }

    return this.prisma.listaEspera.findMany({
      where: whereCondition,
      select: {
        // Dados do Paciente
        id_Lista: true,
        nomeRegistro: true,
        nomeSocial: true,
        id_Status: true,
        Status: {
          // O status principal do paciente
          select: { nome: true },
        },

        // Aqui está a mágica:
        // Traz os atendimentos filtrados que contêm os registros
        Atendimento: includeAtendimentos,
      },
      orderBy: {
        nomeRegistro: 'asc', // Ordena a lista de pacientes por nome
      },
    });
  }

  async findOne(id: UUID, user: TokenDto) {
    let whereCondition: Prisma.ListaEsperaWhereInput = {
      id_Lista: id,
      Atendimento: {
        some: {
          Prontuario: {
            some: {},
          },
        },
      },
    };

    let includeAtendimentos: Prisma.AtendimentoFindManyArgs = {
      where: {
        Prontuario: {
          some: {},
        },
      },
      select: {
        Prontuario: {
          select: {
            id_Registro: true,
            conteudo: true,
            dataEmissao: true,
            id_Status: true,
            id_Tipo: true,
            ultimaAtualizacao: true,
          },
          orderBy: {
            dataEmissao: 'asc',
          },
        },
      },
    };

    if (user.access === 3) {
      // Supervisor
      if (whereCondition.Atendimento?.some) {
        whereCondition.Atendimento.some.id_Supervisor_Executor = user.sub;
      }
      if (includeAtendimentos.where) {
        includeAtendimentos.where.id_Supervisor_Executor = user.sub;
      }
    } else if (user.access === 4) {
      // Estagiário
      if (whereCondition.Atendimento?.some) {
        whereCondition.Atendimento.some.id_Estagiario_Executor = user.sub;
      }
      if (includeAtendimentos.where) {
        includeAtendimentos.where.id_Estagiario_Executor = user.sub;
      }
    } else if (user.access > 4) {
      // Nível de acesso inválido não pode encontrar ninguém
      throw new NotFoundException(`Paciente com ID ${id} não encontrado.`);
    }

    const paciente = await this.prisma.listaEspera.findFirst({
      where: whereCondition,
      select: {
        // Dados do Paciente (mesmo 'select' do findAll)
        id_Lista: true,
        nomeRegistro: true,
        nomeSocial: true,
        id_Status: true,
        Status: {
          select: { nome: true },
        },
        // Atendimentos filtrados
        Atendimento: includeAtendimentos,
      },
    });

    if (!paciente) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado.`);
    }

    return paciente;
  }
}
