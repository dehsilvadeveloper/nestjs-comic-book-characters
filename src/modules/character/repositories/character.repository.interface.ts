import { BaseRepository } from '@shared/repositories/base.repository.interface';
import { CharacterEntity } from '../entities/character.entity';
import { FindCharacterDto } from '../dtos/find-character.dto';

export abstract class CharacterRepositoryInterface extends BaseRepository<CharacterEntity, FindCharacterDto> {}
