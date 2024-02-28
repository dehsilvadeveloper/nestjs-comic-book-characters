import { Controller, Get, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RelationshipTypeService } from '../services/relationship-type.service';
import { RelationshipTypeListType } from '../types/relationship-type-list.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('relationship type')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('relationship-types')
export class RelationshipTypeController {
  constructor(private readonly relationshipTypeService: RelationshipTypeService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve a list of relationship types.',
    description: 'Retrieve a list of relationship types.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: RelationshipTypeListType,
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<RelationshipTypeListType> {
    const relationshipTypes = await this.relationshipTypeService.getAll();

    return {
      relationship_types: relationshipTypes,
    };
  }
}
