import { Injectable } from '@nestjs/common';
import { MaritalStatusEntity } from '../entities/marital-status.entity';
import { MaritalStatusRepositoryInterface } from '../repositories/marital-status.repository.interface';

@Injectable()
export class MaritalStatusService {
  constructor(private readonly maritalStatusRepository: MaritalStatusRepositoryInterface) {}

  async getAll(): Promise<MaritalStatusEntity[]> {
    return await this.maritalStatusRepository.getAll();
  }
}
