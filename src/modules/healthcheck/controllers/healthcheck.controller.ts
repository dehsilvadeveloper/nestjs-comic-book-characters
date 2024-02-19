import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from '../services/healthcheck.service';
import { HealthcheckResponseType } from '../types/healthcheck-response.type';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

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
