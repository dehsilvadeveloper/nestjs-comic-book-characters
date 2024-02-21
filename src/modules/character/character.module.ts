import { Module } from '@nestjs/common';
import { CharacterController } from './controllers/character.controller';
import { CharacterService } from './services/character.service';
import { DatabaseModule } from '@modules/database/database.module';
import { CharacterCreatedListener } from './listeners/character-created.listener';
import { CharacterUpdatedListener } from './listeners/character-updated.listener';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService, CharacterCreatedListener, CharacterUpdatedListener],
  imports: [DatabaseModule],
})
export class CharacterModule {}
