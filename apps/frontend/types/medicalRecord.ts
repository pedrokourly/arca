/**
 * TypeScript interfaces for medical record data types
 * Based on backend DTOs from apps/backend/src/medical_record/dto/
 */

/**
 * Content structure for Triagem medical records
 */
export interface ConteudoTriagem {
  relatorioDaSessao: string;
  presente: boolean;
}

/**
 * Content structure for Psicoterapia/Evolução medical records
 */
export interface ConteudoEvolucao {
  relatorioDaSessao: string;
  presente: boolean;
}

/**
 * Data structure for creating a Triagem medical record
 */
export interface CreateTriagemMedicalRecordData {
  id_Sessao: string;
  conteudo: ConteudoTriagem;
}

/**
 * Data structure for updating a Triagem medical record
 */
export interface UpdateTriagemMedicalRecordData {
  id_Sessao: string;
  conteudo: ConteudoTriagem;
}

/**
 * Data structure for creating a Psicoterapia medical record
 */
export interface CreatePsicoterapiaMedicalRecordData {
  id_Sessao: string;
  conteudo: ConteudoEvolucao;
}

/**
 * Data structure for updating a Psicoterapia medical record
 */
export interface UpdatePsicoterapiaMedicalRecordData {
  id_Sessao: string;
  conteudo: ConteudoEvolucao;
}
