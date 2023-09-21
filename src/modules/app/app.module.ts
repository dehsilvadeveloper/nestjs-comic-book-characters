import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from '@config/config';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from '@database/database.module';
import { CharacterModule } from '@modules/character/character.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    CharacterModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
