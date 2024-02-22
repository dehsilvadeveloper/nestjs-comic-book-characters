import { UpdateCharacterEnemyDto } from '../dtos/update-character-enemy.dto';
import { CharacterEnemyEntity } from '../entities/character-enemy.entity';

export abstract class CharacterEnemyRepositoryInterface {
  abstract update(characterId: number, payload: UpdateCharacterEnemyDto): Promise<CharacterEnemyEntity[]>;
  abstract getByCharacter(characterId: number): Promise<CharacterEnemyEntity[]>;
}
