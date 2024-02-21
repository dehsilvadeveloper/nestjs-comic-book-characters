import { Module } from '@nestjs/common';
import { CharacterController } from './controllers/character.controller';
import { CharacterPowerController } from './controllers/character-power.controller';
import { CharacterService } from './services/character.service';
import { CharacterPowerService } from './services/character-power.service';
import { CharacterCreatedListener } from './listeners/character-created.listener';
import { CharacterUpdatedListener } from './listeners/character-updated.listener';
import { CharacterDeletedListener } from './listeners/character-deleted.listener';
import { DatabaseModule } from '@modules/database/database.module';

@Module({
  controllers: [CharacterController, CharacterPowerController],
  providers: [
    CharacterService,
    CharacterPowerService,
    CharacterCreatedListener,
    CharacterUpdatedListener,
    CharacterDeletedListener,
  ],
  imports: [DatabaseModule],
})
export class CharacterModule {}
