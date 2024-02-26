import { Controller, Get, UseInterceptors, UseGuards } from '@nestjs/common';
import { RelationshipTypeService } from '../services/relationship-type.service';
import { RelationshipTypeListType } from '../types/relationship-type-list.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('relationship-types')
export class RelationshipTypeController {
  constructor(private readonly relationshipTypeService: RelationshipTypeService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<RelationshipTypeListType> {
    const relationshipTypes = await this.relationshipTypeService.getAll();

    return {
      relationship_types: relationshipTypes,
    };
  }
}
