export enum StatusListaEspera {
  EM_ESPERA = 1,
  EM_TRIAGEM = 2,
  TRIAGEM_APROVADA = 3,
  EM_PSICOTERAPIA = 4,
  RECEBEU_ALTA = 5,
  ENCAMINHADO = 6,
  DESATIVADO = 7,
}

export enum StatusAtendimento {
  ATIVO = 1,
  EM_ANDAMENTO = 2,
  CONCLUIDO = 3,
  CANCELADO = 4,
}

export enum TipoAtendimento {
  TRIAGEM = 1,
  PSICOTERAPIA = 2,
}

export enum StatusProntuario {
  EM_APROVACAO = 1,
  APROVADO = 2,
}

export enum TipoProntuario {
  TRIAGEM = 1,
  PSICOTERAPIA = 2,
  ALTA = 3,
  ENCAMINHAMENTO = 4,
}

export enum RoleAccess {
  ADMIN = 1,
  SECRETARIO = 2,
  SUPERVISOR = 3,
  ESTAGIARIO = 4,
}