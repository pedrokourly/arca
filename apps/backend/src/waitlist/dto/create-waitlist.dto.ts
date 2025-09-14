import { IsString, IsDateString, IsOptional, Length, IsInt, Min, Max, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateWaitlistDto {
  @IsString({ message: 'Nome de registro deve ser uma string' })
  @Length(1, 150, { message: 'Nome de registro deve ter entre 1 e 150 caracteres' })
  nomeRegistro: string;

  @IsOptional()
  @IsString({ message: 'Nome social deve ser uma string' })
  @Length(1, 100, { message: 'Nome social deve ter entre 1 e 100 caracteres' })
  nomeSocial?: string;

  @IsDateString({}, { message: 'Data de nascimento deve estar no formato ISO (YYYY-MM-DD)' })
  dataNascimento: string;

  @IsString({ message: 'Telefone pessoal deve ser uma string' })
  @Length(1, 20, { message: 'Telefone pessoal deve ter entre 1 e 20 caracteres' })
  telefonePessoal: string;

  @IsString({ message: 'Contato de emergência deve ser uma string' })
  @Length(1, 20, { message: 'Contato de emergência deve ter entre 1 e 20 caracteres' })
  contatoEmergencia: string;

  @IsString({ message: 'Endereço (rua) deve ser uma string' })
  @Length(1, 255, { message: 'Endereço (rua) deve ter entre 1 e 255 caracteres' })
  enderecoRua: string;

  @IsString({ message: 'Número do endereço deve ser uma string' })
  @Length(1, 10, { message: 'Número do endereço deve ter entre 1 e 10 caracteres' })
  enderecoNumero: string;

  @IsString({ message: 'Bairro deve ser uma string' })
  @Length(1, 100, { message: 'Bairro deve ter entre 1 e 100 caracteres' })
  enderecoBairro: string;

  @IsString({ message: 'Cidade deve ser uma string' })
  @Length(1, 100, { message: 'Cidade deve ter entre 1 e 100 caracteres' })
  enderecoCidade: string;

  @IsString({ message: 'Estado deve ser uma string' })
  @Length(2, 2, { message: 'Estado deve ter exatamente 2 caracteres' })
  enderecoEstado: string;

  @Transform(({ value }) => value?.replace(/\D/g, ''))
  @IsString({ message: 'CEP deve ser uma string' })
  @Length(8, 8, { message: 'CEP deve ter exatamente 8 dígitos' })
  @Matches(/^\d{8}$/, { message: 'CEP deve conter apenas números' })
  enderecoCEP: string;

  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'ID do gênero deve ser um número inteiro' })
  @Min(1, { message: 'ID do gênero deve ser maior que 0' })
  id_Genero?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'ID da etnia deve ser um número inteiro' })
  @Min(1, { message: 'ID da etnia deve ser maior que 0' })
  id_etnia?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'ID da escolaridade deve ser um número inteiro' })
  @Min(1, { message: 'ID da escolaridade deve ser maior que 0' })
  id_Escolaridade?: number;
}