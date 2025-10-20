import {
  IsNotEmpty,
  IsEnum,
  IsObject,
} from 'class-validator';
import { ConteudoEvolucaoSessaoDto } from './conteudo-evolucao-sessao.dto';
import { ConteudoRelatorioAltaDto } from './conteudo-relatorio-alta.dto';

enum TipoUpdateEnum {
  EVOLUCAO = 'EVOLUCAO',
  ALTA = 'ALTA',
}

export class UpdateProntuarioDto {
  @IsNotEmpty({ message: 'O tipo da atualização é obrigatório.' })
  @IsEnum(TipoUpdateEnum)
  tipoUpdate: TipoUpdateEnum;

  @IsNotEmpty({ message: 'O conteúdo da atualização não pode estar vazio.' })
  @IsObject() // Validamos que é um objeto, a validação específica faremos no serviço.
  conteudo: ConteudoEvolucaoSessaoDto | ConteudoRelatorioAltaDto;
}