import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AuditService } from 'src/audit/audit.service';
import { AuditInterceptor } from 'src/audit/audit.interceptor';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

export async function createTestApp(): Promise<INestApplication> {
    const module: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
    }).compile();

    const app = module.createNestApplication();

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: { enableImplicitConversion: true },
        }),
    );

    const auditService = app.get(AuditService);
    app.useGlobalInterceptors(new AuditInterceptor(auditService));
    app.useGlobalFilters(new HttpExceptionFilter());

    await app.init();
    return app;
}
