import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateCharacterAllyDto } from '../dtos/update-character-ally.dto';
import { CharacterAllyListType } from '../types/character-ally-list.type';
import { CharacterAllyService } from '../services/character-ally.service';
import { CharacterAllyViewModel } from '../view_models/character-ally.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('character ally')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Character with the provided ID does not exists.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterAllyController {
  constructor(private readonly characterAllyService: CharacterAllyService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update the allies related to the character.',
    description: 'Update the allies related to the character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The relationship between character and ally has been successfully updated.',
    type: CharacterAllyListType,
  })
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

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve the list of allies of a character.',
    description: 'Retrieve the list of allies of a character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: CharacterAllyListType,
  })
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
