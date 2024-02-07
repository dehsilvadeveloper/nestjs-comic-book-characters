import { IsNotEmpty, IsEnum, IsString, IsInt, IsPositive } from 'class-validator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';
import { RelationshipTypeEnum } from '@modules/common/enums/relationship-type.enum';

export class CharacterRelativeDto {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'character', column: 'id' })
  relativeId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @IsEnum(RelationshipTypeEnum)
  relationshipTypeId: RelationshipTypeEnum;
}
