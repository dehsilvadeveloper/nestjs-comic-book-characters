import { Controller, Get, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PowerService } from '../services/power.service';
import { PowerListType } from '../types/power-list.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('power')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('powers')
export class PowerController {
  constructor(private readonly powerService: PowerService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve a list of powers.',
    description: 'Retrieve a list of powers.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: PowerListType,
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<PowerListType> {
    const powers = await this.powerService.getAll();

    return {
      powers: powers.map(power => ({ id: power.id, name: power.name })),
    };
  }
}
