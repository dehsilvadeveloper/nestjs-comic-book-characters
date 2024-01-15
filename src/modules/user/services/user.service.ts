import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserRepositoryInterface } from '../repositories/user.repository.interface';
import { PasswordService } from '@modules/common/services/password.service';

@Injectable()
export class UserService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const hashedPassword = await this.passwordService.hashPassword(createUserDto.password);

    return await this.userRepository.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hashedPassword,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    if (updateUserDto.password) {
      updateUserDto.password = await this.passwordService.hashPassword(updateUserDto.password);
    }

    return await this.userRepository.update(id, updateUserDto);
  }

  async firstById(id: number): Promise<UserEntity | null> {
    return await this.userRepository.firstById(id);
  }

  async firstByField(field: string, value: any): Promise<UserEntity | null> {
    return await this.userRepository.firstByField(field, value);
  }
}
