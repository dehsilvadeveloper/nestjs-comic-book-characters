import { ApiProperty } from '@nestjs/swagger';

export class CharacterAllyType {
  @ApiProperty({
    type: Number,
    description: 'Character ID of the ally.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Ally name.',
    example: 'Human Torch',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Ally civil name.',
    nullable: true,
    example: 'Jonathan Lowell Spencer Storm',
  })
  civilName: string | null;
};
