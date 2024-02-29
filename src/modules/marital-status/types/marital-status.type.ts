import { ApiProperty } from '@nestjs/swagger';

export class MaritalStatusType {
  @ApiProperty({
    type: Number,
    description: 'Marital Status ID.',
    example: 2,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Marital status name.',
    example: 'single',
  })
  name: string;
}
