import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, NotFoundException } from '@nestjs/common';
import { CreateCharacterDto } from '../dtos/create-character.dto';
import { UpdateCharacterDto } from '../dtos/update-character.dto';
import { CharacterEntity } from '../entities/character.entity';
import { CharacterService } from '../services/character.service';
import { CharacterViewModel } from '../view_models/character.view-model';
import { NotFoundInterceptor } from '@modules/common/interceptors/not-found-interceptor';

@UseInterceptors(NotFoundInterceptor)
@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.characterService.delete(+id);
  }

  @Get()
  getAll() {
    return this.characterService.getAll();
  }

  @Get(':id')
  async firstById(@Param('id') id: number) {
    const character = await this.characterService.firstById(+id);

    if (!character) {
      throw new NotFoundException(`Character of ID ${id} does not exists.`);
    }

    //return character;
    return CharacterViewModel.toHttp(character);
  }
}
