import { Controller, Body, Put, Param, UseInterceptors, UseGuards } from '@nestjs/common';
import { UpdateCharacterPowerDto } from '../dtos/update-character-power.dto';
import { CharacterPowerType } from '../types/character-power.type';
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
  ): Promise<CharacterPowerType[]> {
    const updatedCharacterPowers = await this.characterPowerService.update(+characterId, updateCharacterPowerDto);

    return updatedCharacterPowers.map(CharacterPowerViewModel.toHttp);
  }
}
