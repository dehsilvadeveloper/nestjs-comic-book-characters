import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from '@config/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './controllers/app.controller';
import { AlignmentModule } from '@modules/alignment/alignment.module';
import { AuthModule } from '@modules/auth/auth.module';
import { CharacterModule } from '@modules/character/character.module';
import { CommonModule } from '@modules/common/common.module';
import { DatabaseModule } from '@modules/database/database.module';
import { HealthcheckModule } from '@modules/healthcheck/healthcheck.module';
import { LivingStatusModule } from '@modules/living-status/living-status.module';
import { MaritalStatusModule } from '@modules/marital-status/marital-status.module';
import { PowerModule } from '@modules/power/power.module';
import { RelationshipTypeModule } from '@modules/relationship-type/relationship-type.module';
import { TeamModule } from '@modules/team/team.module';
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
    LivingStatusModule,
    MaritalStatusModule,
    PowerModule,
    RelationshipTypeModule,
    TeamModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
