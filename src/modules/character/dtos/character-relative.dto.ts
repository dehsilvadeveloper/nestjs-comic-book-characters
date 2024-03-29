import { IsNotEmpty, IsEnum, IsInt, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';
import { RelationshipTypeEnum } from '@modules/relationship-type/enums/relationship-type.enum';

export class CharacterRelativeDto {
  @ApiProperty({
    type: Number,
    description: 'Character ID of the relative.',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'character', column: 'id' })
  relativeId: number;

  @ApiProperty({
    type: Number,
    description: 'Relationship type ID.',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @IsEnum(RelationshipTypeEnum)
  relationshipTypeId: RelationshipTypeEnum;
}
