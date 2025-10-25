import { Type } from "class-transformer";
import { IsBoolean, IsInt, IsNotEmpty,  IsUUID, ValidateNested } from "class-validator";
import { ConteudoTriagemDto } from './conteudo-triagem.dto';

import { UUID } from "node:crypto";

export class CreateTriagemProntuarioDto {
  @IsNotEmpty({ message: 'O ID da sessão é obrigatório.' })
  @IsUUID()
  id_Sessao: UUID;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ConteudoTriagemDto)
  conteudo: ConteudoTriagemDto;
}