import { IsNotEmpty, IsInt, IsPositive, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AreArrayValuesUnique } from '@modules/common/decorators/are-array-values-unique.decorator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';

export class UpdateCharacterPowerDto {
  @ApiProperty({
    type: [Number],
    description: 'An array of character power IDs.',
    example: [1, 5, 9]
  })
  @IsNotEmpty()
  @IsArray()
  @AreArrayValuesUnique()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ExistsOnDatabase(
    { model: 'power', column: 'id' },
    { each: true, message: 'some of the powers provided does not exists' },
  )
  powers: number[];
}
