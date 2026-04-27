import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import { AuditInterceptor } from 'src/audit/audit.interceptor';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('ARCA API')
        .setDescription('API do sistema de gestão de clínica de psicologia')
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    
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
    const port = Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : 3333;
    await app.listen(port);
    const appUrl = await app.getUrl();

    const logger = new Logger('Bootstrap');
    logger.log(`Servidor rodando em ${appUrl}`);
}
void bootstrap();
