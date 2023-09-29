import { BaseRepository } from '@modules/common/repositories/base.repository.interface';
import { TeamEntity } from '../entities/team.entity';
import { FindTeamDto } from '../dtos/find-team.dto';

export abstract class TeamRepositoryInterface extends BaseRepository<TeamEntity, FindTeamDto> {}
