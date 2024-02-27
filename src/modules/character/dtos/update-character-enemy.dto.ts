import { IsNotEmpty, IsInt, IsPositive, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AreArrayValuesUnique } from '@modules/common/decorators/are-array-values-unique.decorator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';

export class UpdateCharacterEnemyDto {
  @ApiProperty({
    type: [Number],
    description: 'An array of character enemy IDs.',
    example: [4, 2, 1]
  })
  @IsNotEmpty()
  @IsArray()
  @AreArrayValuesUnique()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ExistsOnDatabase(
    { model: 'character', column: 'id' },
    { each: true, message: 'some of the enemies provided does not exists' },
  )
  enemies: number[];
}
