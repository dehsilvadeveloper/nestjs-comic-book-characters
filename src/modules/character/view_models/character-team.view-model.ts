import { CharacterTeamEntity } from '../entities/character-team.entity';
import { CharacterTeamType } from '../types/character-team.type';

export class CharacterTeamViewModel {
  private constructor() {
    throw new Error('CharacterTeamViewModel is a static class and should not be instantiated');
  }

  public static toHttp(characterTeam: CharacterTeamEntity): CharacterTeamType {
    return {
      id: characterTeam.team.id,
      name: characterTeam.team.name,
      status: characterTeam.status,
      role: characterTeam.role,
    };
  }
}
