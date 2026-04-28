import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, Length, IsInt, Min, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateWaitlistDto {
    @ApiProperty({ example: 'Pedro Silva', description: 'Nome de registro civil do paciente' })
    @IsString({ message: 'Nome de registro deve ser uma string' })
    @Length(1, 150, { message: 'Nome de registro deve ter entre 1 e 150 caracteres' })
    nomeRegistro: string;

    @ApiPropertyOptional({ example: 'Pedrinha', description: 'Nome social do paciente (opcional)' })
    @IsOptional()
    @IsString({ message: 'Nome social deve ser uma string' })
    @Length(1, 100, { message: 'Nome social deve ter entre 1 e 100 caracteres' })
    nomeSocial?: string;

    @ApiProperty({ example: '2000-05-15', description: 'Data de nascimento no formato ISO (YYYY-MM-DD)' })
    @IsDateString({}, { message: 'Data de nascimento deve estar no formato ISO (YYYY-MM-DD)' })
    dataNascimento: string;

    @ApiProperty({ example: '(34) 99999-0000', description: 'Telefone pessoal do paciente' })
    @IsString({ message: 'Telefone pessoal deve ser uma string' })
    @Length(1, 20, { message: 'Telefone pessoal deve ter entre 1 e 20 caracteres' })
    telefonePessoal: string;

    @ApiProperty({ example: '(34) 98888-0000', description: 'Telefone de contato de emergência' })
    @IsString({ message: 'Contato de emergência deve ser uma string' })
    @Length(1, 20, { message: 'Contato de emergência deve ter entre 1 e 20 caracteres' })
    contatoEmergencia: string;

    @ApiProperty({ example: '12345678900', description: 'CPF do paciente (somente números, 11 dígitos)' })
    @IsString({ message: 'CPF deve ser uma string' })
    @Length(11, 11, { message: 'CPF deve ter exatamente 11 caracteres' })
    @Matches(/^\d{11}$/, { message: 'CPF deve conter apenas números' })
    CPF: string;

    @ApiProperty({ example: 'Rua das Flores', description: 'Logradouro do endereço' })
    @IsString({ message: 'Endereço (rua) deve ser uma string' })
    @Length(1, 255, { message: 'Endereço (rua) deve ter entre 1 e 255 caracteres' })
    enderecoRua: string;

    @ApiProperty({ example: '123', description: 'Número do endereço' })
    @IsString({ message: 'Número do endereço deve ser uma string' })
    @Length(1, 10, { message: 'Número do endereço deve ter entre 1 e 10 caracteres' })
    enderecoNumero: string;

    @ApiProperty({ example: 'Centro', description: 'Bairro do endereço' })
    @IsString({ message: 'Bairro deve ser uma string' })
    @Length(1, 100, { message: 'Bairro deve ter entre 1 e 100 caracteres' })
    enderecoBairro: string;

    @ApiProperty({ example: 'Uberaba', description: 'Cidade do endereço' })
    @IsString({ message: 'Cidade deve ser uma string' })
    @Length(1, 100, { message: 'Cidade deve ter entre 1 e 100 caracteres' })
    enderecoCidade: string;

    @ApiProperty({ example: 'MG', description: 'UF do estado (2 letras)' })
    @IsString({ message: 'Estado deve ser uma string' })
    @Length(2, 2, { message: 'Estado deve ter exatamente 2 caracteres' })
    enderecoEstado: string;

    @ApiProperty({ example: '38000000', description: 'CEP do endereço (somente números, 8 dígitos)' })
    @Transform(({ value }) => String(value ?? '').replace(/\D/g, ''))
    @IsString({ message: 'CEP deve ser uma string' })
    @Length(8, 8, { message: 'CEP deve ter exatamente 8 dígitos' })
    @Matches(/^\d{8}$/, { message: 'CEP deve conter apenas números' })
    enderecoCEP: string;

    @ApiProperty({ example: 1, description: 'ID do gênero (tabela Genero do banco)' })
    @Transform(({ value }: { value: string }) => parseInt(value, 10))
    @IsInt({ message: 'ID do gênero deve ser um número inteiro' })
    @Min(1, { message: 'ID do gênero deve ser maior que 0' })
    id_Genero: number;

    @ApiProperty({ example: 1, description: 'ID da etnia (tabela Etnia do banco)' })
    @Transform(({ value }: { value: string }) => parseInt(value, 10))
    @IsInt({ message: 'ID da etnia deve ser um número inteiro' })
    @Min(1, { message: 'ID da etnia deve ser maior que 0' })
    id_Etnia: number;

    @ApiProperty({ example: 1, description: 'ID da escolaridade (tabela Escolaridade do banco)' })
    @Transform(({ value }: { value: string }) => parseInt(value, 10))
    @IsInt({ message: 'ID da escolaridade deve ser um número inteiro' })
    @Min(1, { message: 'ID da escolaridade deve ser maior que 0' })
    id_Escolaridade: number;
}
