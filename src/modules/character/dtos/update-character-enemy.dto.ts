import { IsNotEmpty, IsInt, IsPositive, IsArray } from 'class-validator';
import { AreArrayValuesUnique } from '@modules/common/decorators/are-array-values-unique.decorator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';

export class UpdateCharacterEnemyDto {
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
