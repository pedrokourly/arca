import { IsString, IsDateString, IsOptional, Length, IsUUID } from 'class-validator';

export class CreateWaitlistDto {
  @IsUUID()
  ID_Lista: string;

  @IsString()
  @Length(1, 150)
  NomeRegistro: string;

  @IsString()
  @Length(1, 100)
  NomeSocial: string;

  @IsDateString()
  DataNascimento: string;

  @IsString()
  @Length(1, 20)
  TelefonePessoal: string;

  @IsString()
  @Length(1, 20)
  ContatoEmergencia: string;

  @IsString()
  @Length(1, 255)
  EnderecoRua: string;

  @IsString()
  @Length(1, 10)
  EnderecoNumero: string;

  @IsString()
  @Length(1, 100)
  EnderecoBairro: string;

  @IsString()
  @Length(1, 100)
  EnderecoCidade: string;

  @IsString()
  @Length(1, 100)
  EnderecoEstado: string;

  @IsString()
  @Length(8, 8)
  EnderecoCEP: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  ID_Genero?: number;

  @IsOptional()
  ID_CorRaca?: number;

  @IsOptional()
  ID_Escolaridade?: number;
}
