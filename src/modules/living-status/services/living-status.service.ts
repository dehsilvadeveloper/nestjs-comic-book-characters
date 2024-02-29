import { Injectable } from '@nestjs/common';
import { LivingStatusEntity } from '../entities/living-status.entity';
import { LivingStatusRepositoryInterface } from '../repositories/living-status.repository.interface';

@Injectable()
export class LivingStatusService {
  constructor(private readonly livingStatusRepository: LivingStatusRepositoryInterface) {}

  async getAll(): Promise<LivingStatusEntity[]> {
    return await this.livingStatusRepository.getAll();
  }
}
