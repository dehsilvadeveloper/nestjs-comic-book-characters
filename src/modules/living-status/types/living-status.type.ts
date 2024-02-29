import { ApiProperty } from '@nestjs/swagger';

export class LivingStatusType {
  @ApiProperty({
    type: Number,
    description: 'Living status ID.',
    example: 2,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Living status name.',
    example: 'alive',
  })
  name: string;
}
