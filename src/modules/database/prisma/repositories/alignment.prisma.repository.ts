import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { AlignmentEntity } from '@modules/alignment/entities/alignment.entity';
import { AlignmentRepositoryInterface } from '@modules/alignment/repositories/alignment.repository.interface';
import { FindAlignmentDto } from '@modules/alignment/dtos/find-alignment.dto';
import { CreateAlignmentDto } from '@modules/alignment/dtos/create-alignment.dto';
import { UpdateAlignmentDto } from '@modules/alignment/dtos/update-alignment.dto';
import { PaginatedOutputType } from '@modules/common/types/paginated-output.type';
import { PaginationOptions } from '@modules/common/value_objects/pagination-options';
import { SortingOptions } from '@modules/common/value_objects/sorting-options';

@Injectable()
export class AlignmentPrismaRepository implements AlignmentRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateAlignmentDto): Promise<AlignmentEntity> {
    throw new Error('Method not implemented.');
  }

  async update(id: number, payload: UpdateAlignmentDto): Promise<AlignmentEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<AlignmentEntity[]> {
    const relationships = await this.prismaService.alignment.findMany();

    return plainToInstance(AlignmentEntity, relationships);
  }

  async getByField(field: string, value: any): Promise<AlignmentEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getWhere(
    paginationOptions: PaginationOptions,
    sortingOptions: SortingOptions,
  ): Promise<PaginatedOutputType<AlignmentEntity>> {
    throw new Error('Method not implemented.');
  }

  async firstById(id: number): Promise<AlignmentEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstByField(field: string, value: any): Promise<AlignmentEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstWhere(where: FindAlignmentDto): Promise<AlignmentEntity | null> {
    if (Object.keys(where).length === 0) {
      return null;
    }

    const alignment = await this.prismaService.alignment.findFirst({ where: where });

    return plainToInstance(AlignmentEntity, alignment);
  }
}
