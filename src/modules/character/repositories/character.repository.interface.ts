import { BaseRepositoryInterface } from '@modules/common/repositories/base.repository.interface';
import { CharacterEntity } from '../entities/character.entity';
import { FindCharacterDto } from '../dtos/find-character.dto';
import { CreateCharacterDto } from '../dtos/create-character.dto';
import { UpdateCharacterDto } from '../dtos/update-character.dto';

export abstract class CharacterRepositoryInterface extends BaseRepositoryInterface<
  CharacterEntity,
  CreateCharacterDto,
  UpdateCharacterDto,
  FindCharacterDto
> {}
