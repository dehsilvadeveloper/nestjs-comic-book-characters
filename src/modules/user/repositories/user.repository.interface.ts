import { BaseRepositoryInterface } from '@modules/common/repositories/base.repository.interface';
import { UserEntity } from '../entities/user.entity';
import { FindUserDto } from '../dtos/find-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

export abstract class UserRepositoryInterface extends BaseRepositoryInterface<
  UserEntity,
  CreateUserDto,
  UpdateUserDto,
  FindUserDto
> {}
