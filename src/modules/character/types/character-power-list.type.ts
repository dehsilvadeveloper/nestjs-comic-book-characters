import { ApiProperty } from '@nestjs/swagger';
import { CharacterPowerType } from './character-power.type';

export class CharacterPowerListType {
  @ApiProperty({
    type: CharacterPowerType,
    isArray: true,
    description: 'An array of character power objects.'
  })
  powers: CharacterPowerType[];
};
