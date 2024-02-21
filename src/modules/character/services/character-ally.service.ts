import { Injectable } from '@nestjs/common';
import { UpdateCharacterAllyDto } from '../dtos/update-character-ally.dto';
import { CharacterAllyEntity } from '../entities/character-ally.entity';
import { CharacterAllyRepositoryInterface } from '../repositories/character-ally.repository.interface';

@Injectable()
export class CharacterAllyService {
  constructor(private readonly characterAllyRepository: CharacterAllyRepositoryInterface) {}

  async update(characterId: number, updateCharacterAllyDto: UpdateCharacterAllyDto): Promise<CharacterAllyEntity[]> {
    const updatedCharacterAllies = await this.characterAllyRepository.update(characterId, updateCharacterAllyDto);

    return updatedCharacterAllies;
  }

  async getByCharacter(characterId: number): Promise<CharacterAllyEntity[]> {
    const characterAllies = await this.characterAllyRepository.getByCharacter(characterId);

    return characterAllies;
  }
}
