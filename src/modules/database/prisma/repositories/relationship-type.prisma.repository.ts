import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma.service';
import { RelationshipTypeEntity } from '@modules/relationship-type/entities/relationship-type.entity';
import { RelationshipTypeRepositoryInterface } from '@modules/relationship-type/repositories/relationship-type.repository.interface';

@Injectable()
export class RelationshipTypePrismaRepository implements RelationshipTypeRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(): Promise<RelationshipTypeEntity[]> {
    const relationships = await this.prismaService.relationshipType.findMany();

    return plainToInstance(RelationshipTypeEntity, relationships);
  }
}
