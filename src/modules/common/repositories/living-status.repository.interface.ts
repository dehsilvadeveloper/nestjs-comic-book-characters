import { BaseRepository } from '@modules/common/repositories/base.repository.interface';
import { LivingStatusEntity } from '../entities/living-status.entity';
import { FindLivingStatusDto } from '../dtos/find-living-status.dto';

export abstract class LivingStatusRepositoryInterface extends BaseRepository<LivingStatusEntity, FindLivingStatusDto> {}
