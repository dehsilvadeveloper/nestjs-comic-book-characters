import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PasswordService {
  constructor(private readonly configService: ConfigService) {}

  async hashPassword(password: string, roundsOfHashing?: number): Promise<string> {
    const rounds = roundsOfHashing
      ? roundsOfHashing
      : this.configService.getOrThrow<number>('password.roundsOfHashing');

    if (isNaN(rounds) || rounds <= 0) {
      throw new Error('Invalid value for roundsOfHashing');
    }

    const hashedPassword = await bcrypt.hash(password, rounds);

    return hashedPassword;
  }
}
