import { ApiProperty } from '@nestjs/swagger';

export class FindUserDto {
  @ApiProperty({
    type: Number,
    description: 'User ID.',
    required: false,
    example: 7,
  })
  id?: number;

  @ApiProperty({
    type: String,
    description: 'User name.',
    required: false,
    example: 'Generic App 1',
  })
  name?: string;

  @ApiProperty({
    type: String,
    description: 'User e-mail.',
    required: false,
    example: 'generic_1@app.com',
  })
  email?: string;
}
