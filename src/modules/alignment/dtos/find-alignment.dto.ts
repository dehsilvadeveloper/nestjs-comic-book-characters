import { ApiProperty } from '@nestjs/swagger';

export class FindAlignmentDto {
  @ApiProperty({
    type: Number,
    description: 'Alignment ID.',
    required: false,
    example: 5,
  })
  id?: number;

  @ApiProperty({
    type: String,
    description: 'Alignment name.',
    required: false,
    example: 'good',
  })
  name?: string;
}
