import { Injectable } from '@nestjs/common';
import { UpdateCharacterTeamDto } from '../dtos/update-character-team.dto';
import { CharacterTeamEntity } from '../entities/character-team.entity';
import { CharacterTeamRepositoryInterface } from '../repositories/character-team.repository.interface';

@Injectable()
export class CharacterTeamService {
  constructor(private readonly characterTeamRepository: CharacterTeamRepositoryInterface) {}

  async update(
    characterId: number,
    updateCharacterTeamDto: UpdateCharacterTeamDto,
  ): Promise<CharacterTeamEntity[]> {
    const updatedCharacterTeams = await this.characterTeamRepository.update(
      characterId,
      updateCharacterTeamDto,
    );

    return updatedCharacterTeams;
  }

  async getByCharacter(characterId: number): Promise<CharacterTeamEntity[]> {
    const characterTeams = await this.characterTeamRepository.getByCharacter(characterId);

    return characterTeams;
  }
}
