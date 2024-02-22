import { CharacterRelativeEntity } from '../entities/character-relative.entity';
import { CharacterRelativeType } from '../types/character-relative.type';

export class CharacterRelativeViewModel {
  private constructor() {
    throw new Error('CharacterRelativeViewModel is a static class and should not be instantiated');
  }

  public static toHttp(characterRelative: CharacterRelativeEntity): CharacterRelativeType {
    return {
      id: characterRelative.relative.id,
      name: characterRelative.relative.name,
      civilName: characterRelative.relative.civilName,
      relationship: characterRelative.relationship.name,
    };
  }
}
