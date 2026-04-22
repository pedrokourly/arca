import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class ConteudoTriagemDto {
    @IsNotEmpty({ message: 'O relatorio não pode estar vazio.' })
    @IsString()
    relatorioDaSessao: string;

    @IsNotEmpty({ message: 'A presença não pode estar vazia.' })
    @IsBoolean()
    presente: boolean;
}
