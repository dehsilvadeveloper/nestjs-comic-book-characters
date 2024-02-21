import { Module } from '@nestjs/common';
import { CharacterController } from './controllers/character.controller';
import { CharacterService } from './services/character.service';
import { DatabaseModule } from '@modules/database/database.module';
import { CharacterCreatedListener } from './listeners/character-created.listener';
import { CharacterUpdatedListener } from './listeners/character-updated.listener';
import { CharacterDeletedListener } from './listeners/character-deleted.listener';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService, CharacterCreatedListener, CharacterUpdatedListener, CharacterDeletedListener],
  imports: [DatabaseModule],
})
export class CharacterModule {}
