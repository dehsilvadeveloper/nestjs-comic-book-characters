import { JwtConfigProps } from './interfaces/config.interface';

export const jwtConfig = (): JwtConfigProps => ({
  secret: process.env.JWT_SECRET || 'zjP9h6ZI5LoSKCRj',
  expiration: process.env.JWT_EXPIRATION || '5m',
});
