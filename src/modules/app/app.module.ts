import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from '@config/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from '@modules/database/database.module';
import { HealthcheckModule } from '@modules/healthcheck/healthcheck.module';
import { CommonModule } from '@modules/common/common.module';
import { AuthModule } from '@modules/auth/auth.module';
import { AlignmentModule } from '../alignment/alignment.module';
import { CharacterModule } from '@modules/character/character.module';
import { RelationshipTypeModule } from '../relationship-type/relationship-type.module';
import { UserModule } from '@modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    EventEmitterModule.forRoot({
      verboseMemoryLeak: true,
      ignoreErrors: true,
    }),
    AlignmentModule,
    AuthModule,
    CharacterModule,
    CommonModule,
    DatabaseModule,
    HealthcheckModule,
    RelationshipTypeModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
