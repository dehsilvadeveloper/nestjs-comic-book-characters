import { Injectable } from '@nestjs/common';
import { UpdateCharacterPowerDto } from '../dtos/update-character-power.dto';
import { CharacterPowerEntity } from '../entities/character-power.entity';
import { CharacterPowerRepositoryInterface } from '../repositories/character-power.repository.interface';

@Injectable()
export class CharacterPowerService {
  constructor(private readonly characterPowerRepository: CharacterPowerRepositoryInterface) {}

  async update(characterId: number, updateCharacterPowerDto: UpdateCharacterPowerDto): Promise<CharacterPowerEntity[]> {
    const updatedCharacterPowers = await this.characterPowerRepository.update(characterId, updateCharacterPowerDto);

    return updatedCharacterPowers;
  }

  async getByCharacter(characterId: number): Promise<CharacterPowerEntity[]> {
    const characterPowers = await this.characterPowerRepository.getByCharacter(characterId);

    return characterPowers;
  }
}
