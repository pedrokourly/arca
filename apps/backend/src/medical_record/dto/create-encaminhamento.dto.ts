import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateEncaminhamentoDto {
    @IsNotEmpty({ message: 'O campo encaminhado não pode estar vazio.' })
    @IsBoolean()
    encaminhado: boolean;

    @IsOptional()
    @IsString({
        message: 'O campo instituicaoEncaminhada deve ser um texto.',
    })
    instituicaoEncaminhada?: string;

    @IsOptional()
    @IsString({
        message: 'O campo motivoEncaminhamento deve ser um texto.',
    })
    motivoEncaminhamento?: string;
}
