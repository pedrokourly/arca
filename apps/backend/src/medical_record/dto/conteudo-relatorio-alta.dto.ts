import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
} from 'class-validator';

export enum MotivoAltaEnum {
  OBJETIVOS_ATINGIDOS = 'OBJETIVOS_ATINGIDOS',
  ABANDONO = 'ABANDONO',
  ENCAMINHAMENTO_EXTERNO = 'ENCAMINHAMENTO_EXTERNO',
  SOLICITACAO_PACIENTE = 'SOLICITACAO_PACIENTE',
  OUTRO = 'OUTRO',
}

export class ConteudoRelatorioAltaDto {
  @IsNotEmpty({ message: 'O motivo da alta é obrigatório.' })
  @IsEnum(MotivoAltaEnum)
  motivoAlta: MotivoAltaEnum;

  @IsNotEmpty({ message: 'O resumo do processo terapêutico não pode estar vazio.' })
  @IsString()
  resumoProcessoTerapeutico: string;

  @IsNotEmpty({ message: 'É necessário descrever os resultados alcançados.' })
  @IsString()
  resultadosAlcancados: string;

  @IsOptional()
  @IsString()
  diagnosticoFinal?: string;

  @IsOptional()
  @IsString()
  recomendacoesPosAlta?: string;
}