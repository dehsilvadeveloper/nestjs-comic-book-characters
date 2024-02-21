import { CharacterPowerEntity } from '../entities/character-power.entity';
import { CharacterPowerType } from '../types/character-power.type';

export class CharacterPowerViewModel {
  private constructor() {
    throw new Error('CharacterPowerViewModel is a static class and should not be instantiated');
  }

  public static toHttp(characterPower: CharacterPowerEntity): CharacterPowerType {
    return {
      id: characterPower.power.id,
      name: characterPower.power.name,
    };
  }
}
