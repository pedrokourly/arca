import { IsEmail, IsInt, IsNotEmpty, IsString, MaxLength, Min, MinLength } from 'class-validator';

// DTO de criação de usuário com base no modelo Usuario do Prisma
// Campos persistidos: nome (<=50), email (<=100), senha (será convertida para senhaHash), roleId (SmallInt)
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    // Recebe a senha em texto puro; será convertida para SenhaHash na service
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(255)
    senha: string;

    @IsInt()
    @Min(1)
    roleId: number;
}
