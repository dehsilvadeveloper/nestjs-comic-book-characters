import { BaseRepository } from '@modules/common/repositories/base.repository.interface';
import { MaritalStatusEntity } from '../entities/marital-status.entity';
import { FindMaritalStatusDto } from '../dtos/find-marital-status.dto';

export abstract class MaritalStatusRepositoryInterface extends BaseRepository<MaritalStatusEntity, FindMaritalStatusDto> {}
