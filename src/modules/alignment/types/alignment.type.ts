import { ApiProperty } from '@nestjs/swagger';

export class AlignmentType {
  @ApiProperty({
    type: Number,
    description: 'Alignment ID.',
    example: 2,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Alignment name.',
    example: 'good',
  })
  name: string;
}
