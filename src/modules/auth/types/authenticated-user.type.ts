import { ApiProperty } from '@nestjs/swagger';

export class AuthenticatedUserType {
  @ApiProperty({
    type: String,
    description: 'Name of the user.',
    required: false,
    example: 'Generic App 1',
  })
  name: string | null;

  @ApiProperty({
    type: String,
    description: 'E-mail of the user.',
    example: 'generic_1@app.com',
  })
  email: string;
};
