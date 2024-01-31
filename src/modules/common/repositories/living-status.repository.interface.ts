import { BaseRepositoryInterface } from '@modules/common/repositories/base.repository.interface';
import { LivingStatusEntity } from '../entities/living-status.entity';
import { FindLivingStatusDto } from '../dtos/find-living-status.dto';
import { CreateLivingStatusDto } from '../dtos/create-living-status.dto';
import { UpdateLivingStatusDto } from '../dtos/update-living-status.dto';

export abstract class LivingStatusRepositoryInterface extends BaseRepositoryInterface<
  LivingStatusEntity,
  CreateLivingStatusDto,
  UpdateLivingStatusDto,
  FindLivingStatusDto
> {}
