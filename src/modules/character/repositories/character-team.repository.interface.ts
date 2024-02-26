import { UpdateCharacterTeamDto } from '../dtos/update-character-team.dto';
import { CharacterTeamEntity } from '../entities/character-team.entity';

export abstract class CharacterTeamRepositoryInterface {
  abstract update(characterId: number, payload: UpdateCharacterTeamDto): Promise<CharacterTeamEntity[]>;
  abstract getByCharacter(characterId: number): Promise<CharacterTeamEntity[]>;
}
