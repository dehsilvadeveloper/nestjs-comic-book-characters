import {
  Controller,
  Query,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateCharacterDto } from '../dtos/create-character.dto';
import { UpdateCharacterDto } from '../dtos/update-character.dto';
import { CharacterListOptionsDto } from '../dtos/character-list-options.dto';
import { CharacterService } from '../services/character.service';
import { CharacterViewModel } from '../view_models/character.view-model';
import { CharacterType } from '../types/character.type';
import { CharacterListType } from '../types/character-list.type';
import { CharacterDeletedSuccessfullyType } from '../types/character-deleted-successfully.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@ApiTags('character')
@ApiResponse({ status: 401, description: 'Unauthorized.' })
@ApiResponse({ status: 403, description: 'Forbidden.' })
@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new character.',
    description: 'Create a new character.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The character has been successfully created.',
    type: CharacterType,
  })
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCharacterDto: CreateCharacterDto): Promise<CharacterType> {
    const character = await this.characterService.create(createCharacterDto);

    return CharacterViewModel.toHttp(character);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update a character.',
    description: 'Update a character.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The character has been successfully updated.',
    type: CharacterType,
  })
  @ApiResponse({ status: 404, description: 'Character with the provided ID does not exists.' })
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() updateCharacterDto: UpdateCharacterDto): Promise<CharacterType> {
    const updatedCharacter = await this.characterService.update(+id, updateCharacterDto);

    return CharacterViewModel.toHttp(updatedCharacter);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete a character.',
    description: 'Delete a character.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The character has been successfully deleted.',
    type: CharacterDeletedSuccessfullyType
  })
  @ApiResponse({ status: 404, description: 'Character with the provided ID does not exists.' })
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number): Promise<CharacterDeletedSuccessfullyType> {
    await this.characterService.delete(+id);

    return { message: 'The character was deleted.' };
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve paginated list of characters.',
    description: 'Retrieve paginated list of characters.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the found records.',
    type: CharacterListType,
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getWhere(@Query() options: CharacterListOptionsDto): Promise<CharacterListType> {
    const characterPaginatedOutput = await this.characterService.getWhere(options);

    const formatedCharacterList = characterPaginatedOutput.data.map(CharacterViewModel.toHttp);

    return {
      ...characterPaginatedOutput,
      data: formatedCharacterList,
    };
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve data of a specific character.',
    description: 'Retrieve data of a specific character.',
  })
  @ApiParam({ name: 'id', description: 'Character ID.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the character data found.',
    type: CharacterType,
  })
  @ApiResponse({ status: 404, description: 'Character with the provided ID does not exists.' })
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async firstById(@Param('id') id: number): Promise<CharacterType> {
    const character = await this.characterService.firstById(+id);

    if (!character) {
      throw new NotFoundException(`Character of ID ${id} does not exists.`);
    }

    return CharacterViewModel.toHttp(character);
  }
}
