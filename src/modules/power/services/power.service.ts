import { Injectable } from '@nestjs/common';
import { PowerEntity } from '../entities/power.entity';
import { PowerRepositoryInterface } from '../repositories/power.repository.interface';

@Injectable()
export class PowerService {
  constructor(private readonly powerRepository: PowerRepositoryInterface) {}

  async getAll(): Promise<PowerEntity[]> {
    return await this.powerRepository.getAll();
  }
}
