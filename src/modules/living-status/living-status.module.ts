import { Module } from '@nestjs/common';
import { LivingStatusController } from './controllers/living-status.controller';
import { LivingStatusService } from './services/living-status.service';
import { DatabaseModule } from '@modules/database/database.module';

@Module({
  controllers: [LivingStatusController],
  providers: [LivingStatusService],
  imports: [DatabaseModule],
})
export class LivingStatusModule {}
