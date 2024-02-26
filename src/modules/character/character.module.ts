import { Module } from '@nestjs/common';
import { CharacterController } from './controllers/character.controller';
import { CharacterAllyController } from './controllers/character-ally.controller';
import { CharacterEnemyController } from './controllers/character-enemy.controller';
import { CharacterPowerController } from './controllers/character-power.controller';
import { CharacterRelativeController } from './controllers/character-relative.controller';
import { CharacterTeamController } from './controllers/character-team.controller';
import { CharacterService } from './services/character.service';
import { CharacterAllyService } from './services/character-ally.service';
import { CharacterEnemyService } from './services/character-enemy.service';
import { CharacterPowerService } from './services/character-power.service';
import { CharacterRelativeService } from './services/character-relative.service';
import { CharacterTeamService } from './services/character-team.service';
import { CharacterCreatedListener } from './listeners/character-created.listener';
import { CharacterUpdatedListener } from './listeners/character-updated.listener';
import { CharacterDeletedListener } from './listeners/character-deleted.listener';
import { DatabaseModule } from '@modules/database/database.module';

@Module({
  controllers: [
    CharacterController,
    CharacterAllyController,
    CharacterEnemyController,
    CharacterPowerController,
    CharacterRelativeController,
    CharacterTeamController,
  ],
  providers: [
    CharacterService,
    CharacterAllyService,
    CharacterEnemyService,
    CharacterPowerService,
    CharacterRelativeService,
    CharacterTeamService,
    CharacterCreatedListener,
    CharacterUpdatedListener,
    CharacterDeletedListener,
  ],
  imports: [DatabaseModule],
})
export class CharacterModule {}
