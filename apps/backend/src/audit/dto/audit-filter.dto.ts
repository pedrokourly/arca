import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class AuditFilterDto extends PaginationDto {
    @ApiPropertyOptional({ example: '2024-01-01', description: 'Data de início do filtro (ISO 8601 YYYY-MM-DD)' })
    @IsOptional()
    @IsDateString()
    dataInicio?: string;

    @ApiPropertyOptional({ example: '2024-12-31', description: 'Data de fim do filtro (ISO 8601 YYYY-MM-DD)' })
    @IsOptional()
    @IsDateString()
    dataFim?: string;

    @ApiPropertyOptional({ example: 'CREATE', description: 'Tipo de ação auditada (ex: CREATE, UPDATE, DELETE)' })
    @IsOptional()
    @IsString()
    tipoAcao?: string;

    @ApiPropertyOptional({ example: 'Usuario', description: 'Nome da entidade afetada' })
    @IsOptional()
    @IsString()
    entidade_Afetada?: string;
}
