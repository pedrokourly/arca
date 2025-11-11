import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuditService } from './audit.service';
import { RequestWithJwtPayload } from 'src/auth/types/auth-request.interface';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private readonly auditService: AuditService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<RequestWithJwtPayload>();
    const user = request.user;

    if (!user || !user.sub) {
      return next.handle();
    }

    return next.handle().pipe(
      tap((data: unknown) => {
        const logAction = async () => {
          try {
            const { ip, method, path, body, params } = request;
            const controllerName = context.getClass().name;
            const methodName = context.getHandler().name;

            let responseId: string | undefined;
            if (typeof data === 'object' && data !== null) {
              if ('id_User' in data && typeof data.id_User === 'string') {
                responseId = data.id_User;
              } else if ('id_Paciente' in data && typeof data.id_Paciente === 'string') {
                responseId = data.id_Paciente;
              } else if ('id_Documento' in data && typeof data.id_Documento === 'string') {
                responseId = data.id_Documento;
              }
            }
            const idEntidade = params.id || responseId;

            await this.auditService.create({
              id_Usuario_Executor: user.sub,
              nome_Usuario_Executor: user.name,
              tipoAcao: `${methodName}`,
              entidade_Afetada: controllerName.replace('Controller', ''),
              id_Entidade_Afetada: idEntidade,
              endereco_Ip: ip,
              detalhes: {
                path,
                method,
                requestBody: this.sanitizeBody(body),
              },
            });
          } catch (error) {
            console.error('Falha ao salvar o log de auditoria:', error);
          }
        };

        void logAction();
      }),
    );
  }

  private sanitizeBody(body: unknown): Prisma.InputJsonValue {
    if (!body || typeof body !== 'object') {
      return body as Prisma.InputJsonValue;
    }

    const sanitizedBody = { ...(body as Record<string, unknown>) };
    const sensitiveKeys = ['senha', 'senhaHash', 'password', 'token'];

    for (const key of sensitiveKeys) {
      if (key in sanitizedBody) {
        sanitizedBody[key] = '********';
      }
    }

    return sanitizedBody as Prisma.InputJsonValue;
  }
}
