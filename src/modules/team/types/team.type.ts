import { ApiProperty } from '@nestjs/swagger';

export class TeamType {
  @ApiProperty({
    type: Number,
    description: 'Team ID.',
    example: 2,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Team name.',
    example: 'Fantastic Four',
  })
  name: string;
}
