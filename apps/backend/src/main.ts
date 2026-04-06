import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import { AuditInterceptor } from 'src/audit/audit.interceptor';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableShutdownHooks();

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
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  const auditService = app.get(AuditService);

  app.useGlobalInterceptors(new AuditInterceptor(auditService));
  app.useGlobalFilters(new HttpExceptionFilter());

  const parsedPort = Number(process.env.PORT);
  const port =
    Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : 3333;
  await app.listen(port);

  const logger = new Logger('Bootstrap');
  logger.log(`Servidor rodando em http://localhost:${port}`);
}
void bootstrap();
