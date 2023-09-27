import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ExistsOnDatabase } from '@shared/decorators/exists-on-database.decorator';

export class CreateCharacterDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @ExistsOnDatabase({ model: 'alignment', column: 'id' }, { message: 'Alignment does not exists.' })
  alignmentId: number;
}
