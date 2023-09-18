import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
