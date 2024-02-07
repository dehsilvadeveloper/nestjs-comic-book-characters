import { CharacterEntity } from '../entities/character.entity';
import { CharacterType } from '../types/character.type';

export class CharacterViewModel {
  private constructor() {
    throw new Error('CharacterViewModel is a static class and should not be instantiated');
  }

  public static toHttp(character: CharacterEntity): CharacterType {
    return {
      id: character.id,
      name: character.name,
      civilName: character.civilName,
      gender: character.gender,
      alignment: character.alignment.name,
      maritalStatus: character.maritalStatus.name,
      livingStatus: character.livingStatus.name,
      powers: (character.powers && character.powers.map(power => power.name)) || [],
      teams:
        (character.teams &&
          character.teams.map(team => ({
            id: team.team.id,
            name: team.team.name,
            status: team.status,
            role: team.role,
          }))) ||
        [],
      relatives:
        (character.relatives &&
          character.relatives.map(relative => ({
            id: relative.relative.id,
            name: relative.relative.name,
            civilName: relative.relative.civilName,
            relationship: relative.relationship.name,
          }))) ||
        [],
      allies:
        (character.allies &&
          character.allies.map(ally => ({ id: ally.ally.id, name: ally.ally.name, civilName: ally.ally.civilName }))) ||
        [],
      enemies:
        (character.enemies &&
          character.enemies.map(enemy => ({
            id: enemy.enemy.id,
            name: enemy.enemy.name,
            civilName: enemy.enemy.civilName,
          }))) ||
        [],
      createdAt: character.createdAt.toISOString(),
      updatedAt: character.updatedAt.toISOString(),
    };
  }
}
