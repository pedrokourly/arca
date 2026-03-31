import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import { AuditInterceptor } from 'src/audit/audit.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  const auditService = app.get(AuditService); // Pega a instância do serviço

  app.useGlobalInterceptors(new AuditInterceptor(auditService));

  await app.listen(process.env.PORT ?? 3333);
}
void bootstrap();
