import { Type } from "class-transformer";
import { IsNotEmpty,  IsUUID, ValidateNested } from "class-validator";
import { ConteudoEvolucaoDto } from './conteudo-evolucao.dto';

import { UUID } from "node:crypto";

export class CreateEvolucaoProntuarioDto {
  @IsNotEmpty({ message: 'O ID do paciente é obrigatório.' })
  @IsUUID()
  id_Paciente: UUID;

  @IsNotEmpty({ message: 'O ID do estagiário é obrigatório.' })
  @IsUUID()
  id_Estagiario: UUID;
  
  @IsNotEmpty({ message: 'O ID do supervisor é obrigatório.' })
  @IsUUID()
  id_Supervisor: UUID;
  
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ConteudoEvolucaoDto)
  conteudo: ConteudoEvolucaoDto;
}