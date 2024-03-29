import { ConfigProps } from './interfaces/config.interface';
import { appConfig } from './app.config';
import { corsConfig } from './cors.config';
import { databaseConfig } from './database.config';
import { paginationConfig } from './pagination.config';
import { sortingConfig } from './sorting.config';
import { passwordConfig } from './password.config';
import { jwtConfig } from './jwt.config';

export const config = (): ConfigProps => ({
  app: appConfig(),
  cors: corsConfig(),
  pagination: paginationConfig(),
  sorting: sortingConfig(),
  database: databaseConfig(),
  password: passwordConfig(),
  jwt: jwtConfig(),
});
