import { ApiProperty } from '@nestjs/swagger';

export class SuccessfulAuthType {
  @ApiProperty({
    type: String,
    description: 'The access token.',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiZGVmYXVsdEBhcHAuY29tIiwiaWF0IjoxNzA5MTQ3MzI1LCJleHAiOjE3MDkxNTAzMjV9.hGWnwo6lw2BjmVxuE7758kbdBzcQ0Zyke31fCLp0II8',
  })
  accessToken: string;

  @ApiProperty({
    type: String,
    description: 'The expiration date for the token.',
    example: '2024-01-05 16:58:45',
  })
  expiresAt: string;
}
