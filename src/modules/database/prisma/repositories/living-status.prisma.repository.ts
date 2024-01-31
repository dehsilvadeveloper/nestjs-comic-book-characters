import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { LivingStatusEntity } from '@modules/common/entities/living-status.entity';
import { LivingStatusRepositoryInterface } from '@modules/common/repositories/living-status.repository.interface';
import { FindLivingStatusDto } from '@modules/common/dtos/find-living-status.dto';
import { CreateLivingStatusDto } from '@modules/common/dtos/create-living-status.dto';
import { UpdateLivingStatusDto } from '@modules/common/dtos/update-living-status.dto';
import { PaginatedOutputType } from '@modules/common/types/paginated-output.type';
import { PaginationOptions } from '@modules/common/value_objects/pagination-options';
import { SortingOptions } from '@modules/common/value_objects/sorting-options';

@Injectable()
export class LivingStatusPrismaRepository implements LivingStatusRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateLivingStatusDto): Promise<LivingStatusEntity> {
    throw new Error('Method not implemented.');
  }

  async update(id: number, payload: UpdateLivingStatusDto): Promise<LivingStatusEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<LivingStatusEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getByField(field: string, value: any): Promise<LivingStatusEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getWhere(
    paginationOptions: PaginationOptions,
    sortingOptions: SortingOptions,
  ): Promise<PaginatedOutputType<LivingStatusEntity>> {
    throw new Error('Method not implemented.');
  }

  async firstById(id: number): Promise<LivingStatusEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstByField(field: string, value: any): Promise<LivingStatusEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstWhere(where: FindLivingStatusDto): Promise<LivingStatusEntity | null> {
    const livingStatus = await this.prismaService.livingStatus.findFirst({ where: where });

    return plainToInstance(LivingStatusEntity, livingStatus);
  }
}
