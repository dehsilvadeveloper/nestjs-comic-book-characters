import { ApiProperty } from '@nestjs/swagger';

export class FindCharacterDto {
  @ApiProperty({
    type: Number,
    description: 'Character ID.',
    required: false,
    nullable: true,
    example: 1,
  })
  id?: number;

  @ApiProperty({
    type: String,
    description: 'Character name.',
    required: false,
    nullable: true,
    example: 'Human Torch',
  })
  name?: string;

  @ApiProperty({
    type: String,
    description: 'Character civil name.',
    required: false,
    nullable: true,
    example: 'Jonathan Lowell Spencer Storm',
  })
  civilName?: string;
}
