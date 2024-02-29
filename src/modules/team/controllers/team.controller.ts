import { Controller, Get, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TeamService } from '../services/team.service';
import { TeamListType } from '../types/team-list.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('team')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve a list of teams.',
    description: 'Retrieve a list of teams.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: TeamListType,
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<TeamListType> {
    const teams = await this.teamService.getAll();

    return {
      teams: teams.map(team => ({ id: team.id, name: team.name })),
    };
  }
}
