import { Type } from 'class-transformer';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { ConteudoEvolucaoDto } from './conteudo-evolucao.dto';

import { UUID } from 'node:crypto';

export class CreateEvolucaoProntuarioDto {
    @IsNotEmpty({ message: 'O ID da sessão é obrigatório.' })
    @IsUUID()
    id_Sessao: UUID;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ConteudoEvolucaoDto)
    conteudo: ConteudoEvolucaoDto;
}
