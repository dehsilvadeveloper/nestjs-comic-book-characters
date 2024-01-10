import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PasswordService } from './services/password.service';
import { RepositoryService } from './services/repository.service';
import { ExistsOnDatabaseValidator } from '@modules/common/rules/exists-on-database.rule';
import { IsUniqueValidator } from '@modules/common/rules/is-unique.rule';

@Module({
  providers: [ExistsOnDatabaseValidator, IsUniqueValidator, PasswordService, RepositoryService],
  imports: [DatabaseModule],
  exports: [ExistsOnDatabaseValidator, IsUniqueValidator, PasswordService, RepositoryService],
})
export class CommonModule {}
