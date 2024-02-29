import { ApiProperty } from '@nestjs/swagger';

export class PowerType {
  @ApiProperty({
    type: Number,
    description: 'Power ID.',
    example: 2,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Power name.',
    example: 'Invisibility',
  })
  name: string;
}
