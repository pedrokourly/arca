/**
 * Type definitions for medical record DTOs
 * These interfaces match the backend DTOs for type safety
 */

export interface ConteudoTriagemDto {
  relatorioDaSessao: string;
  presente: boolean;
}

export interface CreateTriagemProntuarioDto {
  id_Sessao: string;
  conteudo: ConteudoTriagemDto;
}

export interface ConteudoEvolucaoDto {
  relatorioDaSessao: string;
  presente: boolean;
}

export interface CreateEvolucaoProntuarioDto {
  id_Sessao: string;
  conteudo: ConteudoEvolucaoDto;
}
