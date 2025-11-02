import { IsEmail, IsInt, IsNotEmpty, IsString, Matches, MaxLength, Min, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

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

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(255)
  senha: string;

  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value))
  roleId: number;

  @IsString({ message: 'O CRP deve ser um texto.' })
  @IsNotEmpty({ message: 'O campo CRP não pode ser vazio.' })
  @Matches(/^\d{2}\/\d{5,6}$/, {
    message: 'O CRP é inválido. O formato esperado é XX/XXXXX ou XX/XXXXXX (ex: 06/12345).',
  })
  crp?: string;
}
