// conteudo-evolucao-sessao.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class ConteudoEvolucaoSessaoDto {
  @IsNotEmpty({ message: 'É necessário descrever os temas abordados na sessão.' })
  @IsString()
  temasAbordados: string;

  @IsOptional()
  @IsString()
  analiseDemanda: string; // Análise do psicólogo sobre a demanda/queixa do paciente na sessão.

  @IsOptional()
  @IsString()
  intervencoes: string; // Técnicas e intervenções realizadas pelo terapeuta.

  @IsOptional()
  @IsString()
  observacoesComportamentais: string; // Observações sobre o comportamento do paciente.

  @IsOptional()
  @IsString()
  encaminhamentos: string; // "Tarefas de casa", orientações ou temas para a próxima sessão.

  @IsOptional()
  @IsDateString()
  proximaConsulta?: string;
}