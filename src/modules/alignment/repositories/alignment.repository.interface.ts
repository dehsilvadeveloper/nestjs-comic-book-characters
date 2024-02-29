import { BaseRepositoryInterface } from '@modules/common/repositories/base.repository.interface';
import { AlignmentEntity } from '../entities/alignment.entity';
import { FindAlignmentDto } from '../dtos/find-alignment.dto';
import { CreateAlignmentDto } from '../dtos/create-alignment.dto';
import { UpdateAlignmentDto } from '../dtos/update-alignment.dto';

export abstract class AlignmentRepositoryInterface extends BaseRepositoryInterface<
  AlignmentEntity,
  CreateAlignmentDto,
  UpdateAlignmentDto,
  FindAlignmentDto
> {
  abstract getAll(): Promise<AlignmentEntity[]>;
}
