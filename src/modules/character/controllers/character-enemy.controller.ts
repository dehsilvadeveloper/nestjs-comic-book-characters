import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards } from '@nestjs/common';
import { UpdateCharacterEnemyDto } from '../dtos/update-character-enemy.dto';
import { CharacterEnemyListType } from '../types/character-enemy-list.type';
import { CharacterEnemyService } from '../services/character-enemy.service';
import { CharacterEnemyViewModel } from '../view_models/character-enemy.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterEnemyController {
  constructor(private readonly characterEnemyService: CharacterEnemyService) {}

  @Put(':id/enemies')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') characterId: number,
    @Body() updateCharacterEnemyDto: UpdateCharacterEnemyDto,
  ): Promise<CharacterEnemyListType> {
    const updatedCharacterEnemies = await this.characterEnemyService.update(+characterId, updateCharacterEnemyDto);

    const formatedCharacterEnemiesList = updatedCharacterEnemies.map(CharacterEnemyViewModel.toHttp);

    return {
      enemies: formatedCharacterEnemiesList,
    };
  }

  @Get(':id/enemies')
  @UseGuards(JwtAuthGuard)
  async getByCharacter(@Param('id') characterId: number): Promise<CharacterEnemyListType> {
    const characterEnemies = await this.characterEnemyService.getByCharacter(+characterId);

    const formatedCharacterEnemiesList = characterEnemies.map(CharacterEnemyViewModel.toHttp);

    return {
        enemies: formatedCharacterEnemiesList,
    };
  }
}
