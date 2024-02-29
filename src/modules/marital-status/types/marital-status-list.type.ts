import { ApiProperty } from '@nestjs/swagger';
import { MaritalStatusType } from './marital-status.type';

export class MaritalStatusListType {
  @ApiProperty({
    type: MaritalStatusType,
    isArray: true,
    description: 'An array of marital statuses objects.',
  })
  maritalStatuses: MaritalStatusType[];
}
