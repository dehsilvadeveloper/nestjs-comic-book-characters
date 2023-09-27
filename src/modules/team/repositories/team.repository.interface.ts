import { BaseRepository } from '@shared/repositories/base.repository.interface';
import { TeamEntity } from '../entities/team.entity';

export abstract class TeamRepositoryInterface extends BaseRepository<TeamEntity> {}
