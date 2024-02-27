import { ApiProperty } from '@nestjs/swagger';
import { CharacterEnemyType } from './character-enemy.type';

export class CharacterEnemyListType {
  @ApiProperty({
    type: CharacterEnemyType,
    isArray: true,
    description: 'An array of character enemies objects.',
  })
  enemies: CharacterEnemyType[];
}
