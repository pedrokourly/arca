import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { CreateEncaminhamentoDto } from './create-encaminhamento.dto';

export class CreateAltaDto extends CreateEncaminhamentoDto {
    @IsNotEmpty({ message: 'O campo recebeuAlta não pode estar vazio.' })
    @IsBoolean()
    recebeuAlta: boolean;

    @IsOptional()
    @IsString({
        message: 'O campo instituicaoEncaminhada deve ser um texto.',
    })
    finalidade?: string;
}
