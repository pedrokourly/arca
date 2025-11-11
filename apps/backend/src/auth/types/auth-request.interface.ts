// apps/backend/src/auth/types/auth-request.interface.ts

import { Request } from 'express';
import { UserDto } from '../dto/user.dto';
import { TokenDto } from '../dto/token.dto';
import { Usuario } from '@prisma/client';

export type UserWithoutPassword = Omit<Usuario, 'senhaHash'>;

export interface RequestWithJwtPayload extends Request {
  user: TokenDto;
  body: unknown;
  params: { id?: string };
}

export interface RequestWithUser extends Request {
  user: UserDto;
  body: unknown;
  params: { id?: string };
}
