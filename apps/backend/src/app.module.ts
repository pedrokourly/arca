import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WaitlistModule } from './waitlist/waitlist.module';
import { AuditModule } from './audit/audit.module';
import { SessionModule } from './session/session.module';
import { MedicalRecordModule } from './medical_record/medical_record.module';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: process.env.NODE_ENV
          ? `.env.${process.env.NODE_ENV}`
          : '.env',
    }),
    AuditModule,
    AuthModule,
    UsersModule,
    WaitlistModule,
    SessionModule,
    MedicalRecordModule,
    PdfModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
