import { DatabaseConfigProps } from './interfaces/config.interface';

export const databaseConfig = (): DatabaseConfigProps => ({
  mysql: {
    type: process.env.DB_TYPE || 'mysql',
    host: process.env.DB_HOST || 'mysql',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    portExternal: process.env.DB_PORT_EXTERNAL ? parseInt(process.env.DB_PORT_EXTERNAL) : 3398,
    database: process.env.DATABASE || 'nestjs_comic_character',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
  },
});
