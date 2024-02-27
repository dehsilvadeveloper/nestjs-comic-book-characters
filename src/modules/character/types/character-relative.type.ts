import { ApiProperty } from '@nestjs/swagger';

export class CharacterRelativeType {
  @ApiProperty({
    type: Number,
    description: 'Character ID of the relative.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Relative name.',
    example: 'Spider-girl',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Relative civil name.',
    nullable: true,
    example: 'May Parker',
  })
  civilName: string | null;

  @ApiProperty({
    type: String,
    description: 'Name of the relationship type of the relative.',
    example: 'daughter',
  })
  relationship: string;
};
