import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { PowerEntity } from '@modules/power/entities/power.entity';
import { PowerRepositoryInterface } from '@modules/power/repositories/power.repository.interface';
import { FindPowerDto } from '@modules/power/dtos/find-power.dto';
import { CreatePowerDto } from '@modules/power/dtos/create-power.dto';
import { UpdatePowerDto } from '@modules/power/dtos/update-power.dto';
import { PaginatedOutputType } from '@modules/common/types/paginated-output.type';
import { PaginationOptions } from '@modules/common/value_objects/pagination-options';
import { SortingOptions } from '@modules/common/value_objects/sorting-options';

@Injectable()
export class PowerPrismaRepository implements PowerRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreatePowerDto): Promise<PowerEntity> {
    throw new Error('Method not implemented.');
  }

  async update(id: number, payload: UpdatePowerDto): Promise<PowerEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<PowerEntity[]> {
    const powers = await this.prismaService.power.findMany();

    return plainToInstance(PowerEntity, powers);
  }

  async getByField(field: string, value: any): Promise<PowerEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getWhere(
    paginationOptions: PaginationOptions,
    sortingOptions: SortingOptions,
  ): Promise<PaginatedOutputType<PowerEntity>> {
    throw new Error('Method not implemented.');
  }

  async firstById(id: number): Promise<PowerEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstByField(field: string, value: any): Promise<PowerEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstWhere(where: FindPowerDto): Promise<PowerEntity | null> {
    if (Object.keys(where).length === 0) {
      return null;
    }

    const power = await this.prismaService.power.findFirst({ where: where });

    return plainToInstance(PowerEntity, power);
  }
}
