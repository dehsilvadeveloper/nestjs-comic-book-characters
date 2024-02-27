import { ApiProperty } from '@nestjs/swagger';

export class HealthcheckResponseType {
  @ApiProperty({
    type: String,
    description: 'General status of the application.',
    example: 'ok',
  })
  status: string;

  @ApiProperty({
    type: Object,
    description: 'Information about the services that composes the application.',
    example: {'http': {'status': 'up'}, 'database': {'status': 'up'}},
  })
  info?: object;

  @ApiProperty({
    type: Object,
    description: 'Application errors.',
  })
  error?: object;

  @ApiProperty({
    type: Object,
    description: 'More details about the services that composes the application.',
  })
  details?: object;
};
