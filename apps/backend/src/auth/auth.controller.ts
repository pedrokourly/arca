import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginWithPassport(@Request() req: any): Promise<any> {
    // Depois de verificado, geramos um token para o usuário
    return this.authService.login(req.user);
  }
}
