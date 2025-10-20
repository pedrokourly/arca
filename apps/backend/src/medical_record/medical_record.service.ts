import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateProntuarioDto } from './dto/create-medical_record.dto';
import { UpdateProntuarioDto } from './dto/update-medical_record.dto';
import { TokenDto } from 'src/users/dto/token.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicalRecordService {
  constructor(private prisma: PrismaService) {}

  async create(CreateProntuarioDto: CreateProntuarioDto, user: TokenDto) {

    const atendimentoPaciente = await this.prisma.atendimento.findFirst({
      where: { id_Lista: CreateProntuarioDto.id_Paciente, id_Status: 3 } // Concluido
    })
    if (!atendimentoPaciente) throw new NotFoundException('Paciente não teve nenhum atendimento concluído. Não é possível criar prontuário sem atendimento.');


    if (user.access < 2){ // Se não for admin ou secretário
      atendimentoPaciente.id_Estagiario_Executor !== user.sub || atendimentoPaciente.id_Supervisor_Executor !== user.sub
      throw new UnauthorizedException('Você não tem permissão para criar um prontuário para este paciente.');
    } 


    const prontuarioExistente = await this.prisma.prontuario.findFirst({
      where: { id_Lista: CreateProntuarioDto.id_Paciente, id_Status: { not: 0 } } // Pendente
    })
    if (prontuarioExistente) throw new BadRequestException('Paciente ja possuí anamnese concluída. Não é possível criar novo prontuário.');

    const newProntuario = await this.prisma.prontuario.create({
      data: {
        id_Lista: CreateProntuarioDto.id_Paciente,
        id_Estagiario: CreateProntuarioDto.id_Estagiario,
        id_Supervisor: CreateProntuarioDto.id_Supervisor,
        conteudo: JSON.parse(JSON.stringify(CreateProntuarioDto.conteudo)),
        id_Status: 2 // Anamnese
      },
    });

    return newProntuario;
  }

  async findAll() {
    return `This action returns all medicalRecord`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} medicalRecord`;
  }

  async update(id: number, UpdateProntuarioDto: UpdateProntuarioDto) {
    return `This action updates a #${id} medicalRecord`;
  }

  async remove(id: number) {
    return `This action removes a #${id} medicalRecord`;
  }
}
