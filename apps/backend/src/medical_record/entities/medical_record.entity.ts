import { UUID } from 'node:crypto';

export class MedicalRecord {
    id: UUID;
    id_Lista: UUID;
    id_Estagiario: UUID;
    id_Supervisor: UUID;
    conteudo: JSON;
    dataEmissao: Date;
    status: 'PENDENTE' | 'EMITIDO' | 'CANCELADO' | 'ALTA';
}
