import { Controller, Get, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LivingStatusService } from '../services/living-status.service';
import { LivingStatusListType } from '../types/living-status-list.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('living status')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('living-statuses')
export class LivingStatusController {
  constructor(private readonly livingStatusService: LivingStatusService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve a list of living statuses.',
    description: 'Retrieve a list of living statuses.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: LivingStatusListType,
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<LivingStatusListType> {
    const livingStatuses = await this.livingStatusService.getAll();

    return {
      livingStatuses: livingStatuses.map(livingStatus => ({ id: livingStatus.id, name: livingStatus.name })),
    };
  }
}
