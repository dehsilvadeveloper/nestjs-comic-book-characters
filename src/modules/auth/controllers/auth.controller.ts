import { Body, Request, Controller, Get, Post, UseGuards, UseInterceptors, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dtos/login.dto';
import { SuccessfulAuthViewModel } from '../view_models/successful-auth.view-model';
import { SuccessfulAuthType } from '../types/successful-auth.type';
import { AuthenticatedUserType } from '../types/authenticated-user.type';
import { UnauthorizedInterceptor } from '../interceptors/unauthorized.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('auth')
@UseInterceptors(UnauthorizedInterceptor, NotFoundInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Perform the login process for a user.',
    description: 'Perform the login process for a user.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The authentication was a success.',
    type: SuccessfulAuthType,
  })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'The password provided is invalid.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Could not found a valid user with the email provided.' })
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<SuccessfulAuthType> {
    const loginAttempt = await this.authService.login(loginDto);

    return SuccessfulAuthViewModel.toHttp(loginAttempt);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve data of the authenticated user.',
    description: 'Retrieve data of the authenticated user.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the user data found.',
    type: AuthenticatedUserType,
  })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'There is no user authenticated.' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(@Request() request): Promise<AuthenticatedUserType> {
    return {
      name: request.user.name,
      email: request.user.email,
    };
  }
}
