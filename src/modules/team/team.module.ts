import { Module } from '@nestjs/common';
import { TeamController } from './controllers/team.controller';
import { TeamService } from './services/team.service';
import { DatabaseModule } from '@modules/database/database.module';

@Module({
  controllers: [TeamController],
  providers: [TeamService],
  imports: [DatabaseModule],
})
export class TeamModule {}
