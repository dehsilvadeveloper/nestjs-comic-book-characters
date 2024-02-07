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
} from '@nestjs/common';
import { CreateCharacterDto } from '../dtos/create-character.dto';
import { UpdateCharacterDto } from '../dtos/update-character.dto';
import { CharacterListOptionsDto } from '../dtos/character-list-options.dto';
import { CharacterService } from '../services/character.service';
import { CharacterViewModel } from '../view_models/character.view-model';
import { CharacterType } from '../types/character.type';
import { CharacterListType } from '../types/character-list.type';
import { BadRequestInterceptor } from '@modules/common/interceptors/bad-request.interceptor';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found.interceptor';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';

@UseInterceptors(BadRequestInterceptor, NotFoundInterceptor)
@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCharacterDto: CreateCharacterDto) {
    const character = await this.characterService.create(createCharacterDto);

    return CharacterViewModel.toHttp(character);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    await this.characterService.delete(+id);

    return { message: 'The character was deleted.' };
  }

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
