import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards } from '@nestjs/common';
import { UpdateCharacterAllyDto } from '../dtos/update-character-ally.dto';
import { CharacterAllyListType } from '../types/character-ally-list.type';
import { CharacterAllyService } from '../services/character-ally.service';
import { CharacterAllyViewModel } from '../view_models/character-ally.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterAllyController {
  constructor(private readonly characterAllyService: CharacterAllyService) {}

  @Put(':id/allies')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') characterId: number,
    @Body() updateCharacterAllyDto: UpdateCharacterAllyDto,
  ): Promise<CharacterAllyListType> {
    const updatedCharacterAllies = await this.characterAllyService.update(+characterId, updateCharacterAllyDto);

    const formatedCharacterAlliesList = updatedCharacterAllies.map(CharacterAllyViewModel.toHttp);

    return {
      allies: formatedCharacterAlliesList,
    };
  }

  @Get(':id/allies')
  @UseGuards(JwtAuthGuard)
  async getByCharacter(@Param('id') characterId: number): Promise<CharacterAllyListType> {
    const characterAllies = await this.characterAllyService.getByCharacter(+characterId);

    const formatedCharacterAlliesList = characterAllies.map(CharacterAllyViewModel.toHttp);

    return {
      allies: formatedCharacterAlliesList,
    };
  }
}
