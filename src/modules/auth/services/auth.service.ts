import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@modules/user/services/user.service';
import { UserEntity } from '@modules/user/entities/user.entity';
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
    try {
      const validatedUser = await this.validateUser(payload.email, payload.password);

      const accessToken = this.jwtService.sign({ sub: validatedUser.id, email: validatedUser.email });

      const decodedAccessToken = this.jwtService.decode(accessToken, { json: true });
      const expiration = new Date(decodedAccessToken.exp * 1000);

      return {
        accessToken: accessToken,
        expiresAt: expiration,
      };
    } catch (error) {
      throw error;
    }
  }

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userService.firstByField('email', email);

    if (!user) {
      throw new UserNotFoundError(`Could not found a valid user with the email: ${email} .`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedError('The password provided is invalid.');
    }

    return user;
  }
}
