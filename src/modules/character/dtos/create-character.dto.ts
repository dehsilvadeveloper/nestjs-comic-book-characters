import { IsOptional, IsNotEmpty, MaxLength, MinLength, IsEnum, IsNumber, IsString } from 'class-validator';
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
  gender: string;

  @IsNotEmpty()
  @IsNumber()
  @ExistsOnDatabase({ model: 'alignment', column: 'id' }, { message: 'alignment provided does not exists' })
  alignmentId: number;

  @IsNotEmpty()
  @IsNumber()
  @ExistsOnDatabase({ model: 'marital_status', column: 'id' }, { message: 'marital status provided does not exists' })
  maritalStatusId: number;

  @IsNotEmpty()
  @IsNumber()
  @ExistsOnDatabase({ model: 'living_status', column: 'id' }, { message: 'living status provided does not exists' })
  livingStatusId: number;
}
