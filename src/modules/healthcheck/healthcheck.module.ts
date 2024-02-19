import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { DatabaseModule } from '@modules/database/database.module';
import { HealthcheckController } from './controllers/healthcheck.controller';
import { HealthcheckService } from './services/healthcheck.service';

@Module({
  controllers: [HealthcheckController],
  providers: [HealthcheckService],
  imports: [DatabaseModule, HttpModule, TerminusModule],
})
export class HealthcheckModule {}
