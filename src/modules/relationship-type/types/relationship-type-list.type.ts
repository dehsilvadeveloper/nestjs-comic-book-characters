import { ApiProperty } from '@nestjs/swagger';
import { RelationshipTypeType } from './relationship-type.type';

export class RelationshipTypeListType {
  @ApiProperty({
    type: RelationshipTypeType,
    isArray: true,
    description: 'An array of relationship type objects.',
  })
  relationshipTypes: RelationshipTypeType[];
};
