import { ApiProperty } from '@nestjs/swagger';

export class CharacterEnemyType {
  @ApiProperty({
    type: Number,
    description: 'Character ID of the enemy.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Enemy name.',
    example: 'Green Goblin',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Enemy civil name.',
    nullable: true,
    example: 'Norman Virgil Osborn',
  })
  civilName: string | null;
};
