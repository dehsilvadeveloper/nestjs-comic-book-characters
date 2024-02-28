import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateCharacterPowerDto } from '../dtos/update-character-power.dto';
import { CharacterPowerListType } from '../types/character-power-list.type';
import { CharacterPowerService } from '../services/character-power.service';
import { CharacterPowerViewModel } from '../view_models/character-power.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('character power')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Character with the provided ID does not exists.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterPowerController {
  constructor(private readonly characterPowerService: CharacterPowerService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update the powers related to the character.',
    description: 'Update the powers related to the character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The relationship between character and powers has been successfully updated.',
    type: CharacterPowerListType,
  })
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

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve the list of powers of a character.',
    description: 'Retrieve the list of powers of a character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: CharacterPowerListType,
  })
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
