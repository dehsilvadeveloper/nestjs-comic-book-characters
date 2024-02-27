import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateCharacterTeamDto } from '../dtos/update-character-team.dto';
import { CharacterTeamListType } from '../types/character-team-list.type';
import { CharacterTeamService } from '../services/character-team.service';
import { CharacterTeamViewModel } from '../view_models/character-team.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('character team')
@ApiResponse({ status: 401, description: 'Unauthorized.' })
@ApiResponse({ status: 403, description: 'Forbidden.' })
@ApiResponse({ status: 404, description: 'Character with the provided ID does not exists.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterTeamController {
  constructor(private readonly characterTeamService: CharacterTeamService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update the teams related to the character.',
    description: 'Update the teams related to the character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The relationship between character and teams has been successfully updated.',
    type: CharacterTeamListType,
  })
  @Put(':id/teams')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') characterId: number,
    @Body() updateCharacterTeamDto: UpdateCharacterTeamDto,
  ): Promise<CharacterTeamListType> {
    const updatedCharacterteams = await this.characterTeamService.update(+characterId, updateCharacterTeamDto);

    const formatedCharacterTeamsList = updatedCharacterteams.map(CharacterTeamViewModel.toHttp);

    return {
      teams: formatedCharacterTeamsList,
    };
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve the list of teams of a character.',
    description: 'Retrieve the list of teams of a character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: CharacterTeamListType,
  })
  @Get(':id/teams')
  @UseGuards(JwtAuthGuard)
  async getByCharacter(@Param('id') characterId: number): Promise<CharacterTeamListType> {
    const characterTeams = await this.characterTeamService.getByCharacter(+characterId);

    const formatedCharacterTeamsList = characterTeams.map(CharacterTeamViewModel.toHttp);

    return {
      teams: formatedCharacterTeamsList,
    };
  }
}
