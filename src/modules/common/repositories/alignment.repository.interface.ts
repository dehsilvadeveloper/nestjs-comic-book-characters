import { BaseRepository } from '@modules/common/repositories/base.repository.interface';
import { AlignmentEntity } from '../entities/alignment.entity';
import { FindAlignmentDto } from '../dtos/find-alignment.dto';

export abstract class AlignmentRepositoryInterface extends BaseRepository<AlignmentEntity, FindAlignmentDto> {}
