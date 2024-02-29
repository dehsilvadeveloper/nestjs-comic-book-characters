import { BaseRepositoryInterface } from '@modules/common/repositories/base.repository.interface';
import { MaritalStatusEntity } from '../entities/marital-status.entity';
import { FindMaritalStatusDto } from '../dtos/find-marital-status.dto';
import { CreateMaritalStatusDto } from '../dtos/create-marital-status.dto';
import { UpdateMaritalStatusDto } from '../dtos/update-marital-status.dto';

export abstract class MaritalStatusRepositoryInterface extends BaseRepositoryInterface<
  MaritalStatusEntity,
  CreateMaritalStatusDto,
  UpdateMaritalStatusDto,
  FindMaritalStatusDto
> {
  abstract getAll(): Promise<MaritalStatusEntity[]>;
}
