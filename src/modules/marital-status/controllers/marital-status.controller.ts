import { Controller, Get, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MaritalStatusService } from '../services/marital-status.service';
import { MaritalStatusListType } from '../types/marital-status-list.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('marital status')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('marital-statuses')
export class MaritalStatusController {
  constructor(private readonly maritalStatusService: MaritalStatusService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve a list of marital statuses.',
    description: 'Retrieve a list of marital statuses.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: MaritalStatusListType,
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<MaritalStatusListType> {
    const maritalStatuses = await this.maritalStatusService.getAll();

    return {
      maritalStatuses: maritalStatuses,
    };
  }
}
