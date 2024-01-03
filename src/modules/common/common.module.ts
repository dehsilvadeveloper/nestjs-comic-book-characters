import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PasswordService } from './services/password.service';
import { RepositoryService } from './services/repository.service';
import { ExistsOnDatabaseValidator } from '@modules/common/rules/exists-on-database.rule';

@Module({
  imports: [DatabaseModule],
  providers: [ExistsOnDatabaseValidator, PasswordService, RepositoryService],
  exports: [ExistsOnDatabaseValidator, PasswordService, RepositoryService],
})
export class CommonModule {}
