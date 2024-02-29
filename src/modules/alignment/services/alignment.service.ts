import { Injectable } from '@nestjs/common';
import { AlignmentEntity } from '../entities/alignment.entity';
import { AlignmentRepositoryInterface } from '../repositories/alignment.repository.interface';

@Injectable()
export class AlignmentService {
  constructor(private readonly alignmentRepository: AlignmentRepositoryInterface) {}

  async getAll(): Promise<AlignmentEntity[]> {
    return await this.alignmentRepository.getAll();
  }
}
