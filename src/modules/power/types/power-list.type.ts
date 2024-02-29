import { ApiProperty } from '@nestjs/swagger';
import { PowerType } from './power.type';

export class PowerListType {
  @ApiProperty({
    type: PowerType,
    isArray: true,
    description: 'An array of power objects.',
  })
  powers: PowerType[];
}
