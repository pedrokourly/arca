import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';
import { UUID } from 'node:crypto';

// DTO de criação de uma sessão com base no modelo ATENDIMENTO do Prisma
export class CreateSessionDto {
    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => new Date(value))
    dataHoraInicio: Date;

    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => new Date(value))
    dataHoraFim: Date;

    @IsUUID()
    @IsNotEmpty()
    id_Lista: UUID;

    @IsUUID()
    @IsNotEmpty()
    id_Estagiario_Executor: UUID;

    @IsUUID()
    @IsNotEmpty()
    id_Supervisor_Executor: UUID;

    @IsInt()
    @IsNotEmpty()
    id_Tipo_Atendimento: number;

    @IsString()
    @IsOptional()
    observacoes: string;
}
