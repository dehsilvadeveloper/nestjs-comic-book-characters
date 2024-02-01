import { PrismaCommonError } from './common';
import { PrismaQueryError } from './query';
import { PrismaMigrationError } from './migration';
import { PrismaIntrospectionError } from './introspection';
import { PrismaDataProxyError } from './data-proxy';

/** Prisma Error Codes */
export const PrismaError = {
  ...PrismaCommonError,
  ...PrismaQueryError,
  ...PrismaMigrationError,
  ...PrismaIntrospectionError,
  ...PrismaDataProxyError
} as const;
