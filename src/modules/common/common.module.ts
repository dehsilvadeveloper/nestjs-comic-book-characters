import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RepositoryService } from './services/repository.service';
import { ExistsOnDatabaseValidator } from '@modules/common/rules/exists-on-database.rule';

@Module({
  imports: [DatabaseModule],
  providers: [ExistsOnDatabaseValidator, RepositoryService],
  exports: [ExistsOnDatabaseValidator, RepositoryService],
})
export class CommonModule {}
