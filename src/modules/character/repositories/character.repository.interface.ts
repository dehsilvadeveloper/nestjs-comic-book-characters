import { CharacterEntity } from '../entities/character.entity';

export abstract class CharacterRepositoryInterface {
  abstract create(character: CharacterEntity): Promise<void>;
  abstract save(character: CharacterEntity): Promise<void>;
  abstract findAll(): Promise<CharacterEntity[]>;
  abstract findById(id: string): Promise<CharacterEntity | null>;
}
