import { IsEmail, IsInt, IsNotEmpty, IsString, IsUUID, MaxLength, Min } from 'class-validator';
import { UUID } from 'node:crypto';

// DTO de usuário com base no modelo Usuario - Responsável pelas requisições
export class TokenDto {
    @IsUUID()
    @IsNotEmpty()
    sub: UUID;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    @IsInt()
    @Min(1)
    access: number;

    @IsInt()
    iat: number;

    @IsInt()
    exp: number;

    @IsString()
    @IsNotEmpty()
    aud: string;

    @IsString()
    @IsNotEmpty()
    iss: string;
}
