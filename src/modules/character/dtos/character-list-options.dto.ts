import { IsEnum } from 'class-validator';
import { ListOptionsDto } from '@modules/common/dtos/list_options/list-options.dto';
import { CharacterSortableFieldsEnum } from '../enums/character-sortable-fields.enum';

export class CharacterListOptionsDto extends ListOptionsDto {
  @IsEnum(CharacterSortableFieldsEnum)
  sortBy?: string;
}
