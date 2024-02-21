import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards } from '@nestjs/common';
import { UpdateCharacterPowerDto } from '../dtos/update-character-power.dto';
import { CharacterPowerListType } from '../types/character-power-list.type';
import { CharacterPowerService } from '../services/character-power.service';
import { CharacterPowerViewModel } from '../view_models/character-power.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterPowerController {
  constructor(private readonly characterPowerService: CharacterPowerService) {}

  @Put(':id/powers')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') characterId: number,
    @Body() updateCharacterPowerDto: UpdateCharacterPowerDto,
  ): Promise<CharacterPowerListType> {
    const updatedCharacterPowers = await this.characterPowerService.update(+characterId, updateCharacterPowerDto);

    const formatedCharacterPowersList = updatedCharacterPowers.map(CharacterPowerViewModel.toHttp);

    return {
      powers: formatedCharacterPowersList,
    };
  }

  @Get(':id/powers')
  @UseGuards(JwtAuthGuard)
  async getByCharacter(@Param('id') characterId: number): Promise<CharacterPowerListType> {
    const characterPowers = await this.characterPowerService.getByCharacter(+characterId);

    const formatedCharacterPowersList = characterPowers.map(CharacterPowerViewModel.toHttp);

    return {
      powers: formatedCharacterPowersList,
    };
  }
}
