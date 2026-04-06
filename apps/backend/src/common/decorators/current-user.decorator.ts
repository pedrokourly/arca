import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TokenDto } from '../dto/token.dto';

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext): TokenDto => {
  const request = ctx.switchToHttp().getRequest<{ user: TokenDto }>();
  return request.user;
});
