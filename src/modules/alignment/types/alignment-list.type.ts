import { ApiProperty } from '@nestjs/swagger';
import { AlignmentType } from './alignment.type';

export class AlignmentListType {
  @ApiProperty({
    type: AlignmentType,
    isArray: true,
    description: 'An array of alignment objects.',
  })
  alignments: AlignmentType[];
}
