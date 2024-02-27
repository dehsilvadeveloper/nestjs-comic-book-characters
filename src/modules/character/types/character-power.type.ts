import { ApiProperty } from '@nestjs/swagger';

export class CharacterPowerType {
  @ApiProperty({
    type: Number,
    description: 'Power ID.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Power name.',
    example: 'Superhuman Agility',
  })
  name: string;
};
