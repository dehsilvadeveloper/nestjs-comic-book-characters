import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MaritalStatusEntity } from '@modules/common/entities/marital-status.entity';
import { MaritalStatusRepositoryInterface } from '@modules/common/repositories/marital-status.repository.interface';
import { FindMaritalStatusDto } from '@modules/common/dtos/find-marital-status.dto';

@Injectable()
export class MaritalStatusPrismaRepository implements MaritalStatusRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(maritalStatus: MaritalStatusEntity): Promise<MaritalStatusEntity> {
    throw new Error('Method not implemented.');
  }

  async update(maritalStatus: MaritalStatusEntity): Promise<MaritalStatusEntity> {
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

  async getWhere(where: FindMaritalStatusDto): Promise<MaritalStatusEntity[]> {
    throw new Error('Method not implemented.');
  }

  async firstById(id: number): Promise<MaritalStatusEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstByField(field: string, value: any): Promise<MaritalStatusEntity | null> {
    throw new Error('Method not implemented.');
  }

  async firstWhere(where: FindMaritalStatusDto): Promise<MaritalStatusEntity | null> {
    throw new Error('Method not implemented.');
  }
}