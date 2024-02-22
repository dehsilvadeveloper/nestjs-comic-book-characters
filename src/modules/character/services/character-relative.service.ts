import { Injectable } from '@nestjs/common';
import { UpdateCharacterRelativeDto } from '../dtos/update-character-relative.dto';
import { CharacterRelativeEntity } from '../entities/character-relative.entity';
import { CharacterRelativeRepositoryInterface } from '../repositories/character-relative.repository.interface';

@Injectable()
export class CharacterRelativeService {
  constructor(private readonly characterRelativeRepository: CharacterRelativeRepositoryInterface) {}

  async update(
    characterId: number,
    updateCharacterRelativeDto: UpdateCharacterRelativeDto,
  ): Promise<CharacterRelativeEntity[]> {
    const updatedCharacterRelatives = await this.characterRelativeRepository.update(
      characterId,
      updateCharacterRelativeDto,
    );

    return updatedCharacterRelatives;
  }

  async getByCharacter(characterId: number): Promise<CharacterRelativeEntity[]> {
    const characterRelatives = await this.characterRelativeRepository.getByCharacter(characterId);

    return characterRelatives;
  }
}
