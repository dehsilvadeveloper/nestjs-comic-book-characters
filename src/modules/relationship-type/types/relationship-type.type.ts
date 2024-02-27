import { ApiProperty } from '@nestjs/swagger';

export class RelationshipTypeType {
  @ApiProperty({
    type: Number,
    description: 'Relationship type ID.',
    example: 2,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Relationship type name.',
    example: 'father',
  })
  name: string;
}
