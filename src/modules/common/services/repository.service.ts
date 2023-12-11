import { Injectable } from '@nestjs/common';
import { CharacterRepositoryInterface } from '@modules/character/repositories/character.repository.interface';
import { AlignmentRepositoryInterface } from '../repositories/alignment.repository.interface';
import { LivingStatusRepositoryInterface } from '../repositories/living-status.repository.interface';
import { MaritalStatusRepositoryInterface } from '../repositories/marital-status.repository.interface';
import { TeamRepositoryInterface } from '@modules/team/repositories/team.repository.interface';

@Injectable()
export class RepositoryService {
  constructor(
    private readonly characterRepository: CharacterRepositoryInterface,
    private readonly alignmentRepository: AlignmentRepositoryInterface,
    private readonly livingStatusRepository: LivingStatusRepositoryInterface,
    private readonly maritalStatusRepository: MaritalStatusRepositoryInterface,
    private readonly teamRepository: TeamRepositoryInterface,
  ) {}

  getRepositoryByModelName(modelName: string) {
    switch (modelName) {
      case 'character':
        return this.characterRepository;
      case 'alignment':
        return this.alignmentRepository;
      case 'living_status':
        return this.livingStatusRepository;
      case 'marital_status':
        return this.maritalStatusRepository;
      case 'team':
        return this.teamRepository;
      default:
        throw new Error(`Could not found a repository related to the model name ${modelName}.`);
    }
  }
}
