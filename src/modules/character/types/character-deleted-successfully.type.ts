import { ApiProperty } from '@nestjs/swagger';

export class CharacterDeletedSuccessfullyType {
  @ApiProperty({
    type: String,
    description: 'Response message for success operation.',
    example: 'The character was deleted.',
  })
  message: string;
}
