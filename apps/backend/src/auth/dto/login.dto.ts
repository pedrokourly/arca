import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'pedro@clinica.com', description: 'E-mail de acesso ao sistema' })
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    @ApiProperty({ example: 'senha1234', description: 'Senha do usuário (mínimo 8 caracteres)' })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(255)
    password: string;
}
