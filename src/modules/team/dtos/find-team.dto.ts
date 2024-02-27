import { ApiProperty } from '@nestjs/swagger';

export class FindTeamDto {
  @ApiProperty({
    type: Number,
    description: 'Team ID.',
    required: false,
    example: 1,
  })
  id?: number;

  @ApiProperty({
    type: String,
    description: 'Team name.',
    required: false,
    example: 'Fantastic Four',
  })
  name?: string;
}
