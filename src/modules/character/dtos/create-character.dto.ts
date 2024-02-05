import { Transform } from 'class-transformer';
import { IsOptional, IsNotEmpty, MaxLength, MinLength, IsEnum, IsString, IsInt, IsPositive } from 'class-validator';
import { GenderNameEnum } from '@modules/common/enums/gender-name.enum';
import { AreArrayValuesUnique } from '@modules/common/decorators/are-array-values-unique.decorator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';

export class CreateCharacterDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  civilName?: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(GenderNameEnum)
  gender: GenderNameEnum;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'alignment', column: 'id' }, { message: 'alignment provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  alignmentId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'marital_status', column: 'id' }, { message: 'marital status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  maritalStatusId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'living_status', column: 'id' }, { message: 'living status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  livingStatusId: number;

  @IsOptional()
  @AreArrayValuesUnique()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ExistsOnDatabase(
    { model: 'power', column: 'id' },
    { each: true, message: 'some of the powers provided does not exists' },
  )
  powers?: number[];

  //teams?: number[];

  //relatives?: number[];

  @IsOptional()
  @AreArrayValuesUnique()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ExistsOnDatabase(
    { model: 'character', column: 'id' },
    { each: true, message: 'some of the allies provided does not exists' },
  )
  allies?: number[];

  //enemies?: number[];
}
