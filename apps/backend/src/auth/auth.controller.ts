import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // Rota alternativa usando o LocalAuthGuard do Passport
  @UseGuards(LocalAuthGuard)
  @Post('login-passport')
  async loginWithPassport(@Request() req) {
    // O usuário já foi validado pelo LocalAuthGuard
    // Agora só precisamos gerar o token
    return this.authService.login({
      email: req.user.email,
      password: '', // Não precisamos da senha aqui pois já foi validada
    });
  }
}