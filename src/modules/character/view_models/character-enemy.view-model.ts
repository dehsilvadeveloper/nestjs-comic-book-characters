import { CharacterEnemyEntity } from '../entities/character-enemy.entity';
import { CharacterEnemyType } from '../types/character-enemy.type';

export class CharacterEnemyViewModel {
  private constructor() {
    throw new Error('CharacterEnemyViewModel is a static class and should not be instantiated');
  }

  public static toHttp(characterEnemy: CharacterEnemyEntity): CharacterEnemyType {
    return {
      id: characterEnemy.enemy.id,
      name: characterEnemy.enemy.name,
      civilName: characterEnemy.enemy.civilName,
    };
  }
}
