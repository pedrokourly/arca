import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateTriagemProntuarioDto } from './dto/create-triagem-medical_record.dto';
import { CreateEvolucaoProntuarioDto } from './dto/create-evolucao-medical_record.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UUID } from 'node:crypto';
import { ConteudoTriagemDto } from './dto/conteudo-triagem.dto';
import { ConteudoEvolucaoDto } from './dto/conteudo-evolucao.dto';
import { CreateEncaminhamentoDto } from './dto/create-encaminhamento.dto';
import { CreateAltaDto } from './dto/create-alta.dtos';
import { PdfService } from 'src/pdf/pdf.service';
import { TokenDto } from 'src/auth/dto/token.dto';

@Injectable()
export class MedicalRecordService {
  constructor(
    private prisma: PrismaService,
    private pdfService: PdfService,
  ) {}

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

            conteudo: JSON.parse(JSON.stringify(CreateTriagemProntuarioDto.conteudo)) as Prisma.InputJsonValue,

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
      console.error(error);
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
      throw new UnauthorizedException('Apenas o estagiario responsável pode editar essa triagem.');

    return await this.prisma.prontuario.update({
      where: { id_Registro: id },
      data: {
        conteudo: JSON.parse(JSON.stringify(ConteudoTriagemDto)) as Prisma.InputJsonValue,
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
      console.error(error);
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

            conteudo: JSON.parse(JSON.stringify(CreateEvolucaoProntuarioDto.conteudo)) as Prisma.InputJsonValue,

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
      console.error(error);
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
      throw new UnauthorizedException('Apenas o estagiario responsável pode editar esse registro de evolução.');

    return await this.prisma.prontuario.update({
      where: { id_Registro: id },
      data: {
        conteudo: JSON.parse(JSON.stringify(ConteudoEvolucaoDto)) as Prisma.InputJsonValue,
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
      console.error(error);
      throw new InternalServerErrorException('Erro no banco de dados. Falha ao aprovar a evolução. Tente novamente.');
    }
  }

  async generatePdf(id: UUID, user: TokenDto, res: any) {
    try {
      const paciente = await this.findOne(id, user);

      const dataForPdf = {
        paciente: {
          nome: paciente.nomeRegistro,
          nomeSocial: paciente.nomeSocial,
          cpf: paciente.CPF || 'N/A',
          dataNascimento: new Date(paciente.dataNascimento).toLocaleDateString('pt-BR'),
          status: paciente.Status.nome,
        },
        atendimentos: paciente.Atendimento.map((atd) => ({
          data: new Date(atd.dataHoraInicio).toLocaleDateString('pt-BR'),
          supervisor: atd.supervisorExecutor?.nome || 'N/A',
          estagiario: atd.estagiarioExecutor?.nome || 'N/A',
          supervisorCRP: atd.supervisorExecutor?.CRP || 'N/A',
          prontuarios: atd.Prontuario.map((p) => {
            return {
              id_Registro: p.id_Registro,
              conteudo: p.conteudo as JSON,
              dataEmissao: new Date(p.dataEmissao).toLocaleDateString('pt-BR'),
              id_Status: p.id_Status,
              id_Tipo: p.id_Tipo,
              // @ts-ignore
              tipo: p.TipoProntuario.nome,
              // @ts-ignore
              status: p.status.nome,
            };
          }),
        })),
      };

      const pdfBuffer = await this.pdfService.generatePdfFromTemplate('prontuario', dataForPdf);

      if (!pdfBuffer) {
        throw new InternalServerErrorException('Erro ao gerar o PDF.');
      }
      const filename = `prontuario-arca-${paciente.nomeRegistro.replace(/\s+/g, '_')}.pdf`;

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

      res.send(pdfBuffer);
    } catch (error) {
      throw error;
    }
  }

  async generateAltaPdf(id: UUID, user: TokenDto, res: any) {
    try {
      const paciente = await this.findOne(id, user);

      let altaRecord: any = null;
      let supervisorNome = 'N/A';
      let supervisorCRP = 'N/A';

      for (const atd of paciente.Atendimento) {
        // @ts-ignore
        const found = atd.Prontuario.find((p) => p.id_Tipo === 3); // 3 = Alta
        if (found) {
          altaRecord = found;
          supervisorNome = atd.supervisorExecutor?.nome || 'N/A';
          supervisorCRP = atd.supervisorExecutor?.CRP || 'N/A';
          break;
        }
      }

      if (!altaRecord) {
        throw new NotFoundException('Registro de Alta (Tipo 3) não encontrado para este paciente.');
      }

      const datasAtendimento = paciente.Atendimento.map((atd) => new Date(atd.dataHoraInicio).getTime());
      const dataInicio = new Date(Math.min(...datasAtendimento)).toLocaleDateString('pt-BR');
      const dataFim = new Date(Math.max(...datasAtendimento)).toLocaleDateString('pt-BR');

      const dataForPdf = {
        pacienteNome: paciente.nomeRegistro,
        cpf: paciente.CPF || 'N/A',
        supervisorNome: supervisorNome,
        supervisorCRP: supervisorCRP,

        solicitanteNome: 'O próprio paciente',
        finalidade: 'Comprovação de acompanhamento psicológico',

        dataInicio: dataInicio,
        dataFim: dataFim,
        motivoAlta: altaRecord.conteudo.finalidade,
        dataAlta: new Date(altaRecord.dataEmissao).toLocaleDateString('pt-BR'),
        dataDocumento: new Date().toLocaleDateString('pt-BR'),
      };

      const pdfBuffer = await this.pdfService.generatePdfFromTemplate('alta', dataForPdf);

      if (!pdfBuffer) {
        throw new InternalServerErrorException('Erro ao gerar o PDF.');
      }
      const filename = `alta-arca-${paciente.nomeRegistro.replace(/\s+/g, '_')}.pdf`;

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

      res.send(pdfBuffer);
    } catch (error) {
      throw error;
    }
  }

  async generateEncaminhamentoPdf(id: UUID, user: TokenDto, res: any) {
    try {
      const encaminhamentoRecord = await this.prisma.prontuario.findUnique({
      where: { id_Registro: id },
      include: {
        TipoProntuario: true,
        atendimento: {
          include: {
            ListaEspera: true,
            supervisorExecutor: true,
          },
        },
      },
    });

    if (!encaminhamentoRecord) {
      throw new NotFoundException('Registro de Encaminhamento não encontrado.');
    }

    if (encaminhamentoRecord.id_Tipo !== 4) {
      throw new BadRequestException('O registro fornecido não é do tipo Encaminhamento.');
    }

    if (user.access === 3) {
      if (encaminhamentoRecord.atendimento.id_Supervisor_Executor !== user.sub) {
        throw new ForbiddenException('Você não tem permissão para acessar este registro.');
      }
    }

    if (user.access === 4) {
      if (encaminhamentoRecord.atendimento.id_Estagiario_Executor !== user.sub) {
        throw new ForbiddenException('Você não tem permissão para acessar este registro.');
      }
    }

    const paciente = encaminhamentoRecord.atendimento.ListaEspera;
    const supervisorNome = encaminhamentoRecord.atendimento.supervisorExecutor?.nome || 'N/A';
    const supervisorCRP = encaminhamentoRecord.atendimento.supervisorExecutor?.CRP || 'N/A';

    // Buscar a triagem do paciente para complementar informações
    const pacienteCompleto = await this.prisma.listaEspera.findUnique({
      where: { id_Lista: paciente.id_Lista },
      include: {
        Atendimento: {
          include: {
            Prontuario: {
              where: { id_Tipo: 1 }, // Triagem
            },
          },
        },
      },
    });

    if (!pacienteCompleto) {
      throw new NotFoundException('Paciente não encontrado.');
    }

    let triagemRecord: any = null;
    for (const atd of pacienteCompleto.Atendimento) {
      if (atd.Prontuario.length > 0) {
        triagemRecord = atd.Prontuario[0];
        break;
      }
    }

    if (!triagemRecord) {
      throw new NotFoundException(
        'Registro de Triagem (Tipo 1) não encontrado. Não é possível gerar o encaminhamento.',
      );
    }

    // Cast do conteúdo para acessar as propriedades
    const conteudoEncaminhamento = encaminhamentoRecord.conteudo as any;

    const dataForPdf = {
      pacienteNome: paciente.nomeRegistro,
      cpf: paciente.CPF || 'N/A',
      supervisorNome: supervisorNome,
      supervisorCRP: supervisorCRP,

      instituicaoNome: conteudoEncaminhamento.instituicaoEncaminhada,
      motivoEncaminhamento: conteudoEncaminhamento.motivoEncaminhamento,

      dataInicioTriagem: new Date(triagemRecord.dataEmissao).toLocaleDateString('pt-BR'),
      dataFimTriagem: new Date(triagemRecord.dataEmissao).toLocaleDateString('pt-BR'),

      dataDocumento: new Date().toLocaleDateString('pt-BR'),
    };

      const pdfBuffer = await this.pdfService.generatePdfFromTemplate('encaminhamento', dataForPdf);

      if (!pdfBuffer) {
        throw new InternalServerErrorException('Erro ao gerar o PDF de encaminhamento.');
      }
      const filename = `declaracao-encaminhamento-${paciente.nomeRegistro.replace(/\s+/g, '_')}.pdf`;

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

      res.send(pdfBuffer);
    } catch (error) {
      throw error;
    }
  }

  async findAll(user: TokenDto) {
    const whereCondition: Prisma.ListaEsperaWhereInput = {
      Atendimento: {
        some: {
          Prontuario: {
            // 'Prontuario' é o nome da relação no schema
            some: {},
          },
        },
      },
    };

    const includeAtendimentos: Prisma.AtendimentoFindManyArgs = {
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
    const whereCondition: Prisma.ListaEsperaWhereInput = {
      id_Lista: id,
      Atendimento: {
        some: {
          Prontuario: {
            some: {},
          },
        },
      },
    };

    const includeAtendimentosWhere: Prisma.AtendimentoWhereInput = {
      Prontuario: {
        some: {},
      },
    };

    const includeAtendimentosSelect: Prisma.AtendimentoSelect = {
      dataHoraInicio: true,
      supervisorExecutor: { select: { nome: true, CRP: true } },
      estagiarioExecutor: { select: { nome: true } },
      Prontuario: {
        select: {
          id_Registro: true,
          conteudo: true,
          dataEmissao: true,
          id_Status: true,
          id_Tipo: true,
          ultimaAtualizacao: true,
          status: { select: { nome: true } },
          TipoProntuario: { select: { nome: true } },
        },
        orderBy: {
          dataEmissao: 'asc',
        },
      },
    };

    const includeAtendimentosOrderBy: Prisma.AtendimentoOrderByWithRelationInput[] = [{ dataHoraInicio: 'asc' }];

    if (user.access === 3) {
      if (whereCondition.Atendimento?.some) {
        whereCondition.Atendimento.some.id_Supervisor_Executor = user.sub;
      }

      includeAtendimentosWhere.id_Supervisor_Executor = user.sub;
    } else if (user.access === 4) {
      // Estagiário
      if (whereCondition.Atendimento?.some) {
        whereCondition.Atendimento.some.id_Estagiario_Executor = user.sub;
      }

      includeAtendimentosWhere.id_Estagiario_Executor = user.sub;
    } else if (user.access > 4) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado.`);
    }

    const paciente = await this.prisma.listaEspera.findFirst({
      where: whereCondition,
      select: {
        id_Lista: true,
        nomeRegistro: true,
        nomeSocial: true,
        id_Status: true,
        Status: {
          select: { nome: true },
        },
        CPF: true,
        telefonePessoal: true,
        dataNascimento: true,

        Atendimento: {
          where: includeAtendimentosWhere,
          select: includeAtendimentosSelect,
          orderBy: includeAtendimentosOrderBy,
        },
      },
    });

    if (!paciente) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado.`);
    }

    const pacienteComConteudoParseado = {
      ...paciente,
      Atendimento: paciente.Atendimento.map((atd) => ({
        ...atd,
        Prontuario: atd.Prontuario.map((p) => ({
          ...p,
          conteudo: typeof p.conteudo === 'string' ? JSON.parse(p.conteudo) : p.conteudo,
        })),
      })),
    };

    return pacienteComConteudoParseado;
  }
}
