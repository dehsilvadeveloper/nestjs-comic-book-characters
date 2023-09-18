import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(configService: ConfigService) {
    // Getting database config data
    const type = configService.getOrThrow<string>('database.mysql.type');
    const host = configService.getOrThrow<string>('database.mysql.host');
    const port = configService.getOrThrow<string>('database.mysql.port');
    const database = configService.getOrThrow<string>('database.mysql.database');
    const username = configService.getOrThrow<string>('database.mysql.username');
    const password = configService.getOrThrow<string>('database.mysql.password');

    super({
      datasources: {
        db: {
          url: `${type}://${username}:${password}@${host}/${database}`,
          //url: `${type}://${username}:${password}@${host}:${port}/${database}`,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
