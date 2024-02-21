import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateCharacterDto } from '../dtos/create-character.dto';
import { UpdateCharacterDto } from '../dtos/update-character.dto';
import { CharacterListOptionsDto } from '../dtos/character-list-options.dto';
import { CharacterEntity } from '../entities/character.entity';
import { CharacterRepositoryInterface } from '../repositories/character.repository.interface';
import { PaginatedOutputType } from '@modules/common/types/paginated-output.type';
import { PaginationOptions } from '@modules/common/value_objects/pagination-options';
import { SortingOptions } from '@modules/common/value_objects/sorting-options';
import { CharacterCreatedEvent } from '../events/character-created.event';
import { CharacterUpdatedEvent } from '../events/character-updated.event';
import { CharacterDeletedEvent } from '../events/character-deleted.event';

@Injectable()
export class CharacterService {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly characterRepository: CharacterRepositoryInterface,
  ) {}

  async create(createCharacterDto: CreateCharacterDto): Promise<CharacterEntity> {
    const character = await this.characterRepository.create(createCharacterDto);

    this.eventEmitter.emit(
      'character.created',
      new CharacterCreatedEvent({
        id: character.id,
        name: character.name,
      }),
    );
    
    return character;
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto): Promise<CharacterEntity> {
    const character = await this.characterRepository.update(id, updateCharacterDto);

    this.eventEmitter.emit(
      'character.updated',
      new CharacterUpdatedEvent({
        id: character.id,
        name: character.name,
      }),
    );
    
    return character;
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.characterRepository.delete(id);

    if (result === true) {
      this.eventEmitter.emit(
        'character.deleted',
        new CharacterDeletedEvent({
          id: id
        }),
      );
    }

    return result;
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
