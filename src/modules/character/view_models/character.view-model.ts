import { CharacterEntity } from '../entities/character.entity';

interface CharacterRelativeProps {
  id: number;
  name: string;
  civilName: string | null;
  relationship: string;
  relationshipAddedAt: string;
}

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
  relatives: CharacterRelativeProps[];
  createdAt: string;
  updatedAt: string;
}

export class CharacterViewModel {
  private constructor() {
    throw new Error('CharacterViewModel is a static class and should not be instantiated');
  }

  public static toHttp(character: CharacterEntity): CharacterProps {
    //console.debug('Entity Return: ', JSON.stringify(character, null, 4));
    //console.debug('Relatives: ', JSON.stringify(character.relatives, null, 4));
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
      relatives:
        (character.relatives &&
          character.relatives.map(relative => ({
            id: relative.relative.id,
            name: relative.relative.name,
            civilName: relative.relative.civilName,
            relationship: relative.relationship.name,
            relationshipAddedAt: relative.addedAt.toISOString(),
          }))) ||
        [],
      createdAt: character.createdAt.toISOString(),
      updatedAt: character.updatedAt.toISOString(),
    };
  }
}
