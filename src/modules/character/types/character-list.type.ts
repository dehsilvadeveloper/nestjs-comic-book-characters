import { ApiProperty } from '@nestjs/swagger';
import { CharacterType } from './character.type';

export class CharacterListType {
  @ApiProperty({
    type: 'object',
    description: 'Metadata related to the character list.',
    properties: {
      total: { type: 'number', description: 'Total number of items', example: 1 },
      pageSize: { type: 'number', description: 'Number of items per page', example: 20 },
      lastPage: { type: 'number', description: 'Last page number', example: 1 },
      currentPage: { type: 'number', description: 'Current page number', example: 1 },
      prevPage: {
        type: 'number',
        nullable: true,
        description: 'Previous page number or null if on the first page',
        example: null,
      },
      nextPage: {
        type: 'number',
        nullable: true,
        description: 'Next page number or null if on the last page',
        example: null,
      },
    },
  })
  meta: {
    total: number;
    pageSize: number;
    lastPage: number;
    currentPage: number;
    prevPage: number | null;
    nextPage: number | null;
  };

  @ApiProperty({
    type: CharacterType,
    isArray: true,
    description: 'An array of character objects.',
  })
  data: CharacterType[];
}
