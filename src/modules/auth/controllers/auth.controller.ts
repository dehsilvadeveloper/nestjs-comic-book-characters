import { Body, Request, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dtos/login.dto';
import { SuccessfulAuthViewModel } from '../view_models/successful-auth.view-model';
import { SuccessfulAuthType } from '../types/successful-auth.type';
import { AuthenticatedUserType } from '../types/authenticated-user.type';
import { UnauthorizedInterceptor } from '../interceptors/unauthorized.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(UnauthorizedInterceptor, NotFoundInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<SuccessfulAuthType> {
    const loginAttempt = await this.authService.login(loginDto);

    return SuccessfulAuthViewModel.toHttp(loginAttempt);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(@Request() request): Promise<AuthenticatedUserType> {
    return {
      name: request.user.name,
      email: request.user.email,
    };
  }
}
