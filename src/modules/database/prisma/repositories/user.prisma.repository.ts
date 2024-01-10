import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { UserEntity } from '@modules/user/entities/user.entity';
import { UserRepositoryInterface } from '@modules/user/repositories/user.repository.interface';
import { FindUserDto } from '@modules/user/dtos/find-user.dto';
import { CreateUserDto } from '@modules/user/dtos/create-user.dto';
import { UpdateUserDto } from '@modules/user/dtos/update-user.dto';
import { UserNotFoundError } from '@modules/user/errors/user-not-found.error';

@Injectable()
export class UserPrismaRepository implements UserRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateUserDto): Promise<UserEntity> {
    const user = await this.prismaService.user.create({
      data: payload,
    });

    return plainToInstance(UserEntity, user);
  }

  async update(id: number, payload: UpdateUserDto): Promise<UserEntity> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new UserNotFoundError(`Cannot proceed. The user of ID ${id} does not exists.`);
    }

    // Remove unknown properties before updating with Prisma
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key]) => key in user),
    );

    const updatedUser = this.prismaService.user.update({
      where: { id },
      data: filteredPayload,
    });

    return plainToInstance(UserEntity, updatedUser);
  }

  async delete(id: number): Promise<boolean> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new UserNotFoundError(`Cannot proceed. The user of ID ${id} does not exists.`);
    }

    await this.prismaService.user.delete({ where: { id: id } });

    return true;
  }

  async getAll(): Promise<UserEntity[]> {
    const users = await this.prismaService.user.findMany();

    return plainToInstance(UserEntity, users);
  }

  async getByField(field: string, value: any): Promise<UserEntity[]> {
    const users = await this.prismaService.user.findMany({
      where: { [field]: value }
    });

    return plainToInstance(UserEntity, users);
  }

  async getWhere(where: FindUserDto): Promise<UserEntity[]> {
    const users = await this.prismaService.user.findMany({ where: where });

    return plainToInstance(UserEntity, users);
  }

  async firstById(id: number): Promise<UserEntity | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });

    return plainToInstance(UserEntity, user);
  }

  async firstByField(field: string, value: any): Promise<UserEntity | null> {
    const user = await this.prismaService.user.findFirst({
      where: { [field]: value }
    });

    return plainToInstance(UserEntity, user);
  }

  async firstWhere(where: FindUserDto): Promise<UserEntity | null> {
    const user = await this.prismaService.user.findFirst({ where: where });

    return plainToInstance(UserEntity, user);
  }
}
