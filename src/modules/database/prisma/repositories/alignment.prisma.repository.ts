import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AlignmentEntity } from '@modules/common/entities/alignment.entity';
import { AlignmentRepositoryInterface } from '@modules/common/repositories/alignment.repository.interface';
import { FindAlignmentDto } from '@modules/common/dtos/find-alignment.dto';

@Injectable()
export class AlignmentPrismaRepository implements AlignmentRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(alignment: AlignmentEntity): Promise<AlignmentEntity> {
    throw new Error('Method not implemented.');
  }

  async update(alignment: AlignmentEntity): Promise<AlignmentEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<AlignmentEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getByField(field: string, value: any): Promise<AlignmentEntity[]> {
    throw new Error('Method not implemented.');
  }

  async getWhere(where: FindAlignmentDto): Promise<AlignmentEntity[]> {
    throw new Error('Method not implemented.');
  }

  async firstById(id: number): Promise<AlignmentEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstByField(field: string, value: any): Promise<AlignmentEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstWhere(where: FindAlignmentDto): Promise<AlignmentEntity | null> {
    throw new Error('Method not implemented.');
  }
}
