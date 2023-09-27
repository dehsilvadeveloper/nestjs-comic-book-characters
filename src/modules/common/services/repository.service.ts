import { Injectable } from '@nestjs/common';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';
import { TeamRepositoryInterface } from '@modules/team/repositories/team.repository.interface';

@Injectable()
export class RepositoryService {
  constructor(
    private readonly characterRepository: CharacterRepositoryInterface,
    private readonly teamRepository: TeamRepositoryInterface,
  ) {}

  getRepositoryByModelName(modelName: string) {
    switch (modelName) {
      case 'character':
        return this.characterRepository;
      case 'team':
        return this.teamRepository;
      default:
        throw new Error(`Could not found a repository related to the model name ${modelName}.`);
    }
  }
}
