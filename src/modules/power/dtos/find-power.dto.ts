import { ApiProperty } from '@nestjs/swagger';

export class FindPowerDto {
  @ApiProperty({
    type: Number,
    description: 'Power ID.',
    required: false,
    example: 1,
  })
  id?: number;

  @ApiProperty({
    type: String,
    description: 'Power name.',
    required: false,
    example: 'Invisibility',
  })
  name?: string;
}
