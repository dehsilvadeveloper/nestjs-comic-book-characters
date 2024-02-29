import { Module } from '@nestjs/common';
import { AlignmentController } from './controllers/alignment.controller';
import { AlignmentService } from './services/alignment.service';
import { DatabaseModule } from '@modules/database/database.module';

@Module({
  controllers: [AlignmentController],
  providers: [AlignmentService],
  imports: [DatabaseModule],
})
export class AlignmentModule {}
