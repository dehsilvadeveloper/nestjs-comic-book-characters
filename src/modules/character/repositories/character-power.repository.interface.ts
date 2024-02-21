import { UpdateCharacterPowerDto } from "../dtos/update-character-power.dto";
import { CharacterPowerEntity } from "../entities/character-power.entity";

export abstract class CharacterPowerRepositoryInterface {
    abstract update(id: number, payload: UpdateCharacterPowerDto): Promise<CharacterPowerEntity[]>;
}
