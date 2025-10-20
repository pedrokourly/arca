import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { MedicalRecordService } from './medical_record.service';
import { CreateProntuarioDto } from './dto/create-medical_record.dto';
import { UpdateProntuarioDto } from './dto/update-medical_record.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenDto } from 'src/users/dto/token.dto';

@Controller('medical-record')
@UseGuards(JwtAuthGuard)
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post()
  create(@Body() createProntuarioDto: CreateProntuarioDto, @Req() req: any) {
    return this.medicalRecordService.create(createProntuarioDto, req.user as TokenDto);
  }

  @Get()
  findAll() {
    return this.medicalRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateProntuarioDto: UpdateProntuarioDto) {
    return this.medicalRecordService.update(+id, UpdateProntuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalRecordService.remove(+id);
  }
}
