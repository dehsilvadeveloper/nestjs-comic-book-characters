import { CharacterAllyEntity } from '../entities/character-ally.entity';
import { CharacterAllyType } from '../types/character-ally.type';

export class CharacterAllyViewModel {
  private constructor() {
    throw new Error('CharacterAllyViewModel is a static class and should not be instantiated');
  }

  public static toHttp(characterAlly: CharacterAllyEntity): CharacterAllyType {
    return {
      id: characterAlly.ally.id,
      name: characterAlly.ally.name,
      civilName: characterAlly.ally.civilName,
    };
  }
}
