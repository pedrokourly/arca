import { CreateSessionDto } from './create-session.dto';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class UpdateSessionDto extends PartialType(
    OmitType(CreateSessionDto, ['id_Lista', 'id_Estagiario_Executor', 'id_Supervisor_Executor'] as const)
) {}
