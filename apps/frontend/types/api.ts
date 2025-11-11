/**
 * TypeScript interfaces for API data types
 * Mirrors backend DTOs and database models
 */

/**
 * User-related types
 */
export interface CreateUserData {
  nome: string;
  email: string;
  senha: string;
  roleId: number;
  crp?: string;
}

export interface UpdateUserData {
  nome?: string;
  email?: string;
  senha?: string;
  crp?: string;
}

/**
 * Session-related types
 */
export interface CreateSessionData {
  dataHoraInicio: Date;
  dataHoraFim: Date;
  id_Lista: string;
  id_Estagiario_Executor: string;
  id_Supervisor_Executor: string;
  id_Tipo_Atendimento: number;
  observacoes?: string;
}

// Form version with nullable dates for UI state management
export interface CreateSessionFormData {
  dataHoraInicio: Date | null;
  dataHoraFim: Date | null;
  id_Lista: string;
  id_Estagiario_Executor: string;
  id_Supervisor_Executor: string;
  id_Tipo_Atendimento: number;
  observacoes: string;
}

export interface UpdateSessionData {
  dataHoraInicio?: Date;
  dataHoraFim?: Date;
  observacoes?: string;
}

/**
 * Medical Record types (Prontuário)
 */
export interface MedicalRecordEntry {
  id_Registro: string;
  id_Status: number;
  id_Tipo: number;
  conteudo: Record<string, unknown>;
}

/**
 * API Error type
 */
export interface ApiError extends Error {
  status?: number;
  userId?: string;
  userName?: string;
}
