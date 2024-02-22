import { Injectable } from '@nestjs/common';
import { UpdateCharacterEnemyDto } from '../dtos/update-character-enemy.dto';
import { CharacterEnemyEntity } from '../entities/character-enemy.entity';
import { CharacterEnemyRepositoryInterface } from '../repositories/character-enemy.repository.interface';

@Injectable()
export class CharacterEnemyService {
  constructor(private readonly characterEnemyRepository: CharacterEnemyRepositoryInterface) {}

  async update(characterId: number, updateCharacterEnemyDto: UpdateCharacterEnemyDto): Promise<CharacterEnemyEntity[]> {
    const updatedCharacterEnemies = await this.characterEnemyRepository.update(characterId, updateCharacterEnemyDto);

    return updatedCharacterEnemies;
  }

  async getByCharacter(characterId: number): Promise<CharacterEnemyEntity[]> {
    const characterEnemies = await this.characterEnemyRepository.getByCharacter(characterId);

    return characterEnemies;
  }
}
