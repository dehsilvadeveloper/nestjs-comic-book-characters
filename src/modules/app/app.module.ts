import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from '@config/config';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from '@modules/database/database.module';
import { CommonModule } from '@modules/common/common.module';
import { CharacterModule } from '@modules/character/character.module';
import { UserModule } from '@modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    CommonModule,
    CharacterModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
