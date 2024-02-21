import { UpdateCharacterPowerDto } from '../dtos/update-character-power.dto';
import { CharacterPowerEntity } from '../entities/character-power.entity';

export abstract class CharacterPowerRepositoryInterface {
  abstract update(characterId: number, payload: UpdateCharacterPowerDto): Promise<CharacterPowerEntity[]>;
  abstract getByCharacter(characterId: number): Promise<CharacterPowerEntity[]>;
}
