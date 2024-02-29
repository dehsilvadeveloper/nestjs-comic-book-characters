import { BaseRepositoryInterface } from '@modules/common/repositories/base.repository.interface';
import { PowerEntity } from '../entities/power.entity';
import { FindPowerDto } from '../dtos/find-power.dto';
import { CreatePowerDto } from '../dtos/create-power.dto';
import { UpdatePowerDto } from '../dtos/update-power.dto';

export abstract class PowerRepositoryInterface extends BaseRepositoryInterface<
  PowerEntity,
  CreatePowerDto,
  UpdatePowerDto,
  FindPowerDto
> {
  abstract getAll(): Promise<PowerEntity[]>;
}
