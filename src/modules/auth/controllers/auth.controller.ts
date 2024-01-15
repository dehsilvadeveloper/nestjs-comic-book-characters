import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dtos/login.dto';
import { SuccessfulAuthViewModel } from '../view_models/successful-auth.view-model';
import { SuccessfulAuthType } from '../types/successful-auth.type';
import { UnautorizedInterceptor } from '../interceptors/unauthorized.interceptor';

@UseInterceptors(UnautorizedInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body() loginDto: LoginDto): Promise<SuccessfulAuthType> {
    const loginAttempt = await this.authService.login(loginDto);

    return SuccessfulAuthViewModel.toHttp(loginAttempt);
  }
}
