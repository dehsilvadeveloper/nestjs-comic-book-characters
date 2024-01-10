import { BaseRepository } from '@modules/common/repositories/base.repository.interface';
import { TeamEntity } from '../entities/team.entity';
import { FindTeamDto } from '../dtos/find-team.dto';
import { CreateTeamDto } from '../dtos/create-team.dto';
import { UpdateTeamDto } from '../dtos/update-team.dto';

export abstract class TeamRepositoryInterface extends BaseRepository<
  TeamEntity,
  FindTeamDto,
  CreateTeamDto,
  UpdateTeamDto
> {}
