import { Transform } from 'class-transformer';
import { IsOptional, MaxLength, MinLength, IsEnum, IsString, IsInt, IsPositive } from 'class-validator';
import { GenderNameEnum } from '@modules/common/enums/gender-name.enum';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';

export class UpdateCharacterDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  civilName?: string;

  @IsOptional()
  @IsString()
  @IsEnum(GenderNameEnum)
  gender?: GenderNameEnum;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'alignment', column: 'id' }, { message: 'alignment provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  alignmentId?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'marital_status', column: 'id' }, { message: 'marital status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  maritalStatusId?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'living_status', column: 'id' }, { message: 'living status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  livingStatusId?: number;
}
