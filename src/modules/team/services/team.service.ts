import { Injectable } from '@nestjs/common';
import { TeamEntity } from '../entities/team.entity';
import { TeamRepositoryInterface } from '../repositories/team.repository.interface';

@Injectable()
export class TeamService {
  constructor(private readonly teamRepository: TeamRepositoryInterface) {}

  async getAll(): Promise<TeamEntity[]> {
    return await this.teamRepository.getAll();
  }
}
