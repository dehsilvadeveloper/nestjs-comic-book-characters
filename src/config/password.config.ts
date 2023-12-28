import { PasswordConfigProps } from './interfaces/config.interface';

export const passwordConfig = (): PasswordConfigProps => ({
  roundsOfHashing: process.env.PASSWORD_ROUNDS_OF_HASHING ? parseInt(process.env.PASSWORD_ROUNDS_OF_HASHING) : 10,
});
