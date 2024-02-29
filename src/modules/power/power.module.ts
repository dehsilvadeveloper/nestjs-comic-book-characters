import { Module } from '@nestjs/common';
import { PowerController } from './controllers/power.controller';
import { PowerService } from './services/power.service';
import { DatabaseModule } from '@modules/database/database.module';

@Module({
  controllers: [PowerController],
  providers: [PowerService],
  imports: [DatabaseModule],
})
export class PowerModule {}
