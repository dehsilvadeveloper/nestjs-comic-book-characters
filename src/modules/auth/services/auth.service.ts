import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/services/user.service';
import { LoginDto } from '../dtos/login.dto';
import { UnauthorizedError } from '../errors/unauthorized.error';
import { UserNotFoundError } from '@modules/user/errors/user-not-found.error';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(payload: LoginDto): Promise<{ accessToken: string; expiresAt: Date }> {
    const user = await this.userService.firstByField('email', payload.email);

    if (!user) {
      throw new UserNotFoundError(`Could not found a valid user with the email: ${payload.email} .`);
    }

    const isPasswordValid = await bcrypt.compare(payload.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedError('The password provided is invalid.');
    }

    const accessToken = this.jwtService.sign({ sub: user.id, email: user.email });

    const decodedAccessToken = this.jwtService.decode(accessToken, { json: true });
    const expiration = new Date(decodedAccessToken.exp * 1000);

    return {
      accessToken: accessToken,
      expiresAt: expiration,
    };
  }
}
