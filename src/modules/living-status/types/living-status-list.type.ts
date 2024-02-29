import { ApiProperty } from '@nestjs/swagger';
import { LivingStatusType } from './living-status.type';

export class LivingStatusListType {
  @ApiProperty({
    type: LivingStatusType,
    isArray: true,
    description: 'An array of living statuses objects.',
  })
  livingStatuses: LivingStatusType[];
}
