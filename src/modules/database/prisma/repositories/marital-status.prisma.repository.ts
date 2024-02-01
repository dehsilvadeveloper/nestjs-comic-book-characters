import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { MaritalStatusEntity } from '@modules/common/entities/marital-status.entity';
import { MaritalStatusRepositoryInterface } from '@modules/common/repositories/marital-status.repository.interface';
import { FindMaritalStatusDto } from '@modules/common/dtos/find-marital-status.dto';
import { CreateMaritalStatusDto } from '@modules/common/dtos/create-marital-status.dto';
import { UpdateMaritalStatusDto } from '@modules/common/dtos/update-marital-status.dto';
import { PaginatedOutputType } from '@modules/common/types/paginated-output.type';
import { PaginationOptions } from '@modules/common/value_objects/pagination-options';
import { SortingOptions } from '@modules/common/value_objects/sorting-options';

@Injectable()
export class MaritalStatusPrismaRepository implements MaritalStatusRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateMaritalStatusDto): Promise<MaritalStatusEntity> {
    throw new Error('Method not implemented.');
  }

  async update(id: number, payload: UpdateMaritalStatusDto): Promise<MaritalStatusEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<MaritalStatusEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getByField(field: string, value: any): Promise<MaritalStatusEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getWhere(
    paginationOptions: PaginationOptions,
    sortingOptions: SortingOptions,
  ): Promise<PaginatedOutputType<MaritalStatusEntity>> {
    throw new Error('Method not implemented.');
  }

  async firstById(id: number): Promise<MaritalStatusEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstByField(field: string, value: any): Promise<MaritalStatusEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstWhere(where: FindMaritalStatusDto): Promise<MaritalStatusEntity | null> {
    if (Object.keys(where).length === 0) {
      return null;
    }

    const maritalStatus = await this.prismaService.maritalStatus.findFirst({ where: where });

    return plainToInstance(MaritalStatusEntity, maritalStatus);
  }
}
