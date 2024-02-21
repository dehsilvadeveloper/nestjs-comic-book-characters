import { UpdateCharacterAllyDto } from '../dtos/update-character-ally.dto';
import { CharacterAllyEntity } from '../entities/character-ally.entity';

export abstract class CharacterAllyRepositoryInterface {
  abstract update(characterId: number, payload: UpdateCharacterAllyDto): Promise<CharacterAllyEntity[]>;
  abstract getByCharacter(characterId: number): Promise<CharacterAllyEntity[]>;
}
