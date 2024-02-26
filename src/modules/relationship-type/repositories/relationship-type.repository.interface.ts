import { RelationshipTypeEntity } from '../entities/relationship-type.entity';

export abstract class RelationshipTypeRepositoryInterface {
  abstract getAll(): Promise<RelationshipTypeEntity[]>;
}
