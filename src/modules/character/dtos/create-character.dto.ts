import { Transform } from 'class-transformer';
import { IsOptional, IsNotEmpty, MaxLength, MinLength, IsEnum, IsString, IsInt, IsPositive } from 'class-validator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';
import { GenderNameEnum } from '@modules/common/enums/gender-name.enum';

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
  civilName: string;

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
  @IsInt({ each: true })
  @IsPositive({ each: true })
  powers: number[];
}
