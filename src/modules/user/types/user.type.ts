import { ApiProperty } from '@nestjs/swagger';

export class UserType {
  @ApiProperty({
    type: Number,
    description: 'User ID.',
    example: 7,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'User name.',
    required: false,
    example: 'Generic App 1',
  })
  name: string | null;

  @ApiProperty({
    type: String,
    description: 'User e-mail.',
    example: 'generic_1@app.com',
  })
  email: string;

  @ApiProperty({
    type: String,
    format: 'date-time',
    description: 'Date and time when the user was created.',
    example: '2023-12-19T15:00:55.036Z',
  })
  createdAt: string;

  @ApiProperty({
    type: String,
    format: 'date-time',
    description: 'Date and time when the user was last updated.',
    example: '2023-12-19T15:00:55.036Z',
  })
  updatedAt: string;
};
