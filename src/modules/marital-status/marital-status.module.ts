import { Module } from '@nestjs/common';
import { MaritalStatusController } from './controllers/marital-status.controller';
import { MaritalStatusService } from './services/marital-status.service';
import { DatabaseModule } from '@modules/database/database.module';

@Module({
  controllers: [MaritalStatusController],
  providers: [MaritalStatusService],
  imports: [DatabaseModule],
})
export class MaritalStatusModule {}
