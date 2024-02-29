import { ApiProperty } from '@nestjs/swagger';

export class FindMaritalStatusDto {
  @ApiProperty({
    type: Number,
    description: 'Marital status ID.',
    required: false,
    example: 5,
  })
  id?: number;

  @ApiProperty({
    type: String,
    description: 'Marital status name.',
    required: false,
    example: 'single',
  })
  name?: string;
}
