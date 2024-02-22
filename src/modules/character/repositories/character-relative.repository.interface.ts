import { UpdateCharacterRelativeDto } from '../dtos/update-character-relative.dto';
import { CharacterRelativeEntity } from '../entities/character-relative.entity';

export abstract class CharacterRelativeRepositoryInterface {
  abstract update(characterId: number, payload: UpdateCharacterRelativeDto): Promise<CharacterRelativeEntity[]>;
  abstract getByCharacter(characterId: number): Promise<CharacterRelativeEntity[]>;
}
