import { Injectable } from '@nestjs/common';
import { RelationshipTypeEntity } from '../entities/relationship-type.entity';
import { RelationshipTypeRepositoryInterface } from '../repositories/relationship-type.repository.interface';

@Injectable()
export class RelationshipTypeService {
  constructor(private readonly relationshipTypeRepository: RelationshipTypeRepositoryInterface) {}

  async getAll(): Promise<RelationshipTypeEntity[]> {
    return await this.relationshipTypeRepository.getAll();
  }
}
