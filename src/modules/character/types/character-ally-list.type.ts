import { ApiProperty } from '@nestjs/swagger';
import { CharacterAllyType } from './character-ally.type';

export class CharacterAllyListType {
  @ApiProperty({
    type: CharacterAllyType,
    isArray: true,
    description: 'An array of character allies objects.',
  })
  allies: CharacterAllyType[];
};
