import { CharacterEntity } from '../entities/character.entity';

export interface CharacterProps {
  id: number;
  name: string;
  civilName: string | null;
  gender: string;
  alignment: string;
  maritalStatus: string;
  livingStatus: string;
  powers: string[];
  teams: string[];
  createdAt: any;
  updatedAt: any;
}

export class CharacterViewModel {
  private constructor() {
    throw new Error('CharacterViewModel is a static class and should not be instantiated');
  }

  public static toHttp(character: CharacterEntity): CharacterProps {
    return {
      id: character.id,
      name: character.name,
      civilName: character.civilName,
      gender: character.gender,
      alignment: character.alignment.name,
      maritalStatus: character.maritalStatus.name,
      livingStatus: character.livingStatus.name,
      powers: (character.powers && character.powers.map(power => power.name)) || [],
      teams: (character.teams && character.teams.map(team => team.name)) || [],
      createdAt: character.createdAt,
      updatedAt: character.updatedAt,
    };
  }
}
