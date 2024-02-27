import { IsNotEmpty, IsInt, IsPositive, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AreArrayValuesUnique } from '@modules/common/decorators/are-array-values-unique.decorator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';

export class UpdateCharacterAllyDto {
  @ApiProperty({
    type: [Number],
    description: 'An array of character ally IDs.',
    example: [9, 2, 7]
  })
  @IsNotEmpty()
  @IsArray()
  @AreArrayValuesUnique()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ExistsOnDatabase(
    { model: 'character', column: 'id' },
    { each: true, message: 'some of the allies provided does not exists' },
  )
  allies: number[];
}
