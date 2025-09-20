// src/audit/audit.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuditService } from './audit.service';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private readonly auditService: AuditService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user || !user.sub && !user.id_User) {
      return next.handle();
    }

    return next.handle().pipe(
      tap(async (data) => {
        try {
          const { ip, method, path, body, params } = request;
          const controllerName = context.getClass().name;
          const methodName = context.getHandler().name;

          // Preenchendo os novos campos
          const entidade = controllerName.replace('Controller', '');
          const idEntidade = params.id || (data && (data.id_User || data.id_Paciente || data.id_Documento));

          await this.auditService.create({
            id_Usuario_Executor: user.id_User || user.sub,
            nome_Usuario_Executor: user.name || user.nome, 
            tipoAcao: `${methodName}`, 
            entidade_Afetada: entidade,
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
      }),
    );
  }
  
  private sanitizeBody(body: any): any {
    if (!body || typeof body !== 'object') return body;
    
    const sanitizedBody = { ...body };
    const sensitiveKeys = ['senha', 'senhaHash', 'password', 'token'];

    for (const key of sensitiveKeys) {
      if (sanitizedBody[key]) {
        sanitizedBody[key] = '********';
      }
    }
    return sanitizedBody;
  }
}