import { Controller, Get, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AlignmentService } from '../services/alignment.service';
import { AlignmentListType } from '../types/alignment-list.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('alignment')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('alignments')
export class AlignmentController {
  constructor(private readonly alignmentService: AlignmentService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve a list of alignments.',
    description: 'Retrieve a list of alignments.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: AlignmentListType,
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<AlignmentListType> {
    const alignments = await this.alignmentService.getAll();

    return {
      alignments: alignments.map(alignment => ({ id: alignment.id, name: alignment.name })),
    };
  }
}
