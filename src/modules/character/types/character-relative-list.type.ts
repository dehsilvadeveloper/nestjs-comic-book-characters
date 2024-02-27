import { ApiProperty } from '@nestjs/swagger';
import { CharacterRelativeType } from './character-relative.type';

export class CharacterRelativeListType {
  @ApiProperty({
    type: CharacterRelativeType,
    isArray: true,
    description: 'An array of character relative objects.'
  })
  relatives: CharacterRelativeType[];
};
