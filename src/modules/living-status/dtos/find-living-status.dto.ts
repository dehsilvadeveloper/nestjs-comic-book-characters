import { ApiProperty } from '@nestjs/swagger';

export class FindLivingStatusDto {
  @ApiProperty({
    type: Number,
    description: 'Living status ID.',
    required: false,
    example: 4,
  })
  id?: number;

  @ApiProperty({
    type: String,
    description: 'Living status name.',
    required: false,
    example: 'alive',
  })
  name?: string;
}
