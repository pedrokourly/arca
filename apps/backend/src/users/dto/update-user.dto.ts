import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @MaxLength(50)
    nome?: string;

    @IsOptional()
    @IsEmail()
    @MaxLength(100)
    email?: string;

    @IsOptional()
    @IsString()
    @MinLength(8)
    @MaxLength(255)
    senha?: string;

    @IsOptional()
    @IsString({ message: 'O CRP deve ser um texto.' })
    @IsNotEmpty({ message: 'O campo CRP não pode ser vazio.' })
    @Matches(/^\d{2}\/\d{5,6}$/, {
        message: 'O CRP é inválido. O formato esperado é XX/XXXXX ou XX/XXXXXX (ex: 06/12345).',
    })
    crp?: string;
}
