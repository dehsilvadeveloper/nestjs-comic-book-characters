import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HealthcheckService } from '../services/healthcheck.service';
import { HealthcheckResponseType } from '../types/healthcheck-response.type';

@ApiTags('healthcheck')
@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @ApiOperation({
    summary: 'Retrieve information about the application health.',
    description: 'Retrieve information about the application health.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the information found.',
    type: HealthcheckResponseType,
  })
  @Get()
  async healthcheck(): Promise<HealthcheckResponseType> {
    try {
      const healthCheckResult = await this.healthcheckService.healthCheck();

      return healthCheckResult;
    } catch (error) {
      return {
        status: error.response.status,
        info: error.response.info,
        error: error.response.error,
        details: error.response.details,
      };
    }
  }
}
