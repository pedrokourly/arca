import { Module } from '@nestjs/common';
import { MedicalRecordService } from './medical_record.service';
import { MedicalRecordController } from './medical_record.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PdfModule } from 'src/pdf/pdf.module';

@Module({
  imports: [PrismaModule, PdfModule],
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService],
})
export class MedicalRecordModule {}
