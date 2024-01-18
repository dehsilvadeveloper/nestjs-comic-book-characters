import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from '../dtos/create-character.dto';
import { UpdateCharacterDto } from '../dtos/update-character.dto';
import { CharacterEntity } from '../entities/character.entity';
import { CharacterRepositoryInterface } from '../repositories/character.repository.interface';

@Injectable()
export class CharacterService {
  constructor(private readonly characterRepository: CharacterRepositoryInterface) {}

  create(createCharacterDto: CreateCharacterDto) {
    return 'This action adds a new character';
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  delete(id: number) {
    return `This action removes a #${id} character`;
  }

  async getAll() {
    return await this.characterRepository.getAll();
  }

  async firstById(id: number): Promise<CharacterEntity | null> {
    return await this.characterRepository.firstById(id);
  }
}
