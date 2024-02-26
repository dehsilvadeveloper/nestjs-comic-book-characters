import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards } from '@nestjs/common';
import { UpdateCharacterTeamDto } from '../dtos/update-character-team.dto';
import { CharacterTeamListType } from '../types/character-team-list.type';
import { CharacterTeamService } from '../services/character-team.service';
import { CharacterTeamViewModel } from '../view_models/character-team.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterTeamController {
  constructor(private readonly characterTeamService: CharacterTeamService) {}

  @Put(':id/teams')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') characterId: number,
    @Body() updateCharacterTeamDto: UpdateCharacterTeamDto,
  ): Promise<CharacterTeamListType> {
    const updatedCharacterteams = await this.characterTeamService.update(
      +characterId,
      updateCharacterTeamDto,
    );

    const formatedCharacterTeamsList = updatedCharacterteams.map(CharacterTeamViewModel.toHttp);

    return {
      teams: formatedCharacterTeamsList,
    };
  }

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
