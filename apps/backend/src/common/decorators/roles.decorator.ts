import { SetMetadata } from '@nestjs/common';
import { RoleAccess } from 'src/common/enums/status.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleAccess[]) => SetMetadata(ROLES_KEY, roles);
