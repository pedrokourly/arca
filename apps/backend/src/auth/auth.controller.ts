import { Controller, Post, UseGuards, Request, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Throttle } from '@nestjs/throttler';
import { AuthenticatedUserDto } from './dto/authenticated-user.dto';
import { LocalAuthRequest } from './dto/local-auth-request.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Throttle({ default: { ttl: 60_000, limit: 5 } })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginWithPassport(@Request() req: LocalAuthRequest): Promise<AuthenticatedUserDto> {
    return this.authService.login(req.user);
  }
}
