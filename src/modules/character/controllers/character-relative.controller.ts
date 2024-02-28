import { Controller, Body, Get, Put, Param, UseInterceptors, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateCharacterRelativeDto } from '../dtos/update-character-relative.dto';
import { CharacterRelativeListType } from '../types/character-relative-list.type';
import { CharacterRelativeService } from '../services/character-relative.service';
import { CharacterRelativeViewModel } from '../view_models/character-relative.view-model';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('character relative')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Character with the provided ID does not exists.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterRelativeController {
  constructor(private readonly characterRelativeService: CharacterRelativeService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update the relatives related to the character.',
    description: 'Update the relatives related to the character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The relationship between character and relatives has been successfully updated.',
    type: CharacterRelativeListType,
  })
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

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve the list of relatives of a character.',
    description: 'Retrieve the list of relatives of a character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: CharacterRelativeListType,
  })
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
