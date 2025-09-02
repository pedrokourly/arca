import { IsEmail, IsInt, IsNotEmpty, IsString, IsUUID, MaxLength, Min, MinLength } from 'class-validator';
import { UUID } from 'node:crypto';

// DTO de usuário com base no modelo Usuario criador - Responsável pelas requisições
// Campos persistidos: nome (<=50), email (<=100), senha (será convertida para senhaHash), roleId (SmallInt)
export class TokenDto {
    @IsUUID()
    @IsNotEmpty()
    sub: UUID;

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
