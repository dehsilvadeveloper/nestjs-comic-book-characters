import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards } from '@nestjs/common';
import { UpdateCharacterRelativeDto } from '../dtos/update-character-relative.dto';
import { CharacterRelativeListType } from '../types/character-relative-list.type';
import { CharacterRelativeService } from '../services/character-relative.service';
import { CharacterRelativeViewModel } from '../view_models/character-relative.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterRelativeController {
  constructor(private readonly characterRelativeService: CharacterRelativeService) {}

  @Put(':id/relatives')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') characterId: number,
    @Body() updateCharacterRelativeDto: UpdateCharacterRelativeDto,
  ): Promise<CharacterRelativeListType> {
    const updatedCharacterRelatives = await this.characterRelativeService.update(
      +characterId,
      updateCharacterRelativeDto,
    );

    const formatedCharacterRelativesList = updatedCharacterRelatives.map(CharacterRelativeViewModel.toHttp);

    return {
      relatives: formatedCharacterRelativesList,
    };
  }

  @Get(':id/relatives')
  @UseGuards(JwtAuthGuard)
  async getByCharacter(@Param('id') characterId: number): Promise<CharacterRelativeListType> {
    const characterRelatives = await this.characterRelativeService.getByCharacter(+characterId);

    const formatedCharacterRelativesList = characterRelatives.map(CharacterRelativeViewModel.toHttp);

    return {
      relatives: formatedCharacterRelativesList,
    };
  }
}
