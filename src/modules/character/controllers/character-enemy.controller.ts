import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateCharacterEnemyDto } from '../dtos/update-character-enemy.dto';
import { CharacterEnemyListType } from '../types/character-enemy-list.type';
import { CharacterEnemyService } from '../services/character-enemy.service';
import { CharacterEnemyViewModel } from '../view_models/character-enemy.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('character enemy')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Character with the provided ID does not exists.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterEnemyController {
  constructor(private readonly characterEnemyService: CharacterEnemyService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update the enemies related to the character.',
    description: 'Update the enemies related to the character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The relationship between character and enemies has been successfully updated.',
    type: CharacterEnemyListType,
  })
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

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve the list of enemies of a character.',
    description: 'Retrieve the list of enemies of a character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: CharacterEnemyListType,
  })
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
