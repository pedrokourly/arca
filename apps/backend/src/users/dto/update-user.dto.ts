import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
    @ApiPropertyOptional({ example: 'Pedro Alves', description: 'Novo nome do usuário' })
    @IsOptional()
    @IsString()
    @MaxLength(50)
    nome?: string;

    @ApiPropertyOptional({ example: 'pedro.alves@clinica.com', description: 'Novo e-mail de acesso' })
    @IsOptional()
    @IsEmail()
    @MaxLength(100)
    email?: string;

    @ApiPropertyOptional({ example: 'novaSenha123', description: 'Nova senha (mínimo 8 caracteres)' })
    @IsOptional()
    @IsString()
    @MinLength(8)
    @MaxLength(255)
    senha?: string;

    @ApiPropertyOptional({ example: '06/12345', description: 'Novo CRP no formato XX/XXXXX ou XX/XXXXXX' })
    @IsOptional()
    @IsString({ message: 'O CRP deve ser um texto.' })
    @IsNotEmpty({ message: 'O campo CRP não pode ser vazio.' })
    @Matches(/^\d{2}\/\d{5,6}$/, {
        message: 'O CRP é inválido. O formato esperado é XX/XXXXX ou XX/XXXXXX (ex: 06/12345).',
    })
    crp?: string;
}
