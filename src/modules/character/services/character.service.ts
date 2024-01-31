import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from '../dtos/create-character.dto';
import { UpdateCharacterDto } from '../dtos/update-character.dto';
import { CharacterListOptionsDto } from '../dtos/character-list-options.dto';
import { CharacterEntity } from '../entities/character.entity';
import { CharacterRepositoryInterface } from '../repositories/character.repository.interface';
import { PaginatedOutputType } from '@modules/common/types/paginated-output.type';
import { PaginationOptions } from '@modules/common/value_objects/pagination-options';
import { SortingOptions } from '@modules/common/value_objects/sorting-options';

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

  async getByField(field: string, value: any): Promise<CharacterEntity[]> {
    return await this.characterRepository.getByField(field, value);
  }

  async getAll(): Promise<CharacterEntity[]> {
    return await this.characterRepository.getAll();
  }

  async getWhere(options: CharacterListOptionsDto): Promise<PaginatedOutputType<CharacterEntity>> {
    const paginationOptions = new PaginationOptions({ page: options.page, pageSize: options.pageSize });
    const sortingOptions = new SortingOptions({ sortBy: options.sortBy, sortOrder: options.sortOrder });

    return await this.characterRepository.getWhere(paginationOptions, sortingOptions);
  }

  async firstById(id: number): Promise<CharacterEntity | null> {
    return await this.characterRepository.firstById(id);
  }
}
