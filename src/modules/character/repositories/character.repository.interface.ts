import { BaseRepository } from '@shared/repositories/base.repository.interface';
import { CharacterEntity } from '../entities/character.entity';

export abstract class CharacterRepositoryInterface extends BaseRepository<CharacterEntity> {}
