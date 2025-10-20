import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ConteudoAnamneseDto {
  @IsNotEmpty({ message: 'A queixa principal não pode estar vazia.' })
  @IsString()
  queixaPrincipal: string;

  @IsNotEmpty({ message: 'O histórico da doença atual não pode estar vazio.' })
  @IsString()
  historicoDoencaAtual: string;

  @IsOptional()
  @IsString()
  historicoPessoalFamiliar: string; // Abrange histórico médico, social, familiar, etc.

  @IsOptional()
  @IsString()
  hipoteseDiagnosticaInicial: string; // Termo mais adequado que "diagnostico" no início.

  @IsNotEmpty({ message: 'O plano terapêutico inicial é obrigatório.' })
  @IsString()
  planoTerapeuticoInicial: string; // Objetivos e estratégias iniciais.
}