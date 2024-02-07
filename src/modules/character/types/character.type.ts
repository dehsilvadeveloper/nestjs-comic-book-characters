import { CharacterRelativeType } from "./character-relative.type";
import { CharacterAllyType } from "./character-ally.type";
import { CharacterEnemyType } from "./character-enemy.type";
import { CharacterTeamType } from "./character-team.type";

export type CharacterType = {
  id: number;
  name: string;
  civilName: string | null;
  gender: string;
  alignment: string;
  maritalStatus: string;
  livingStatus: string;
  powers: string[];
  teams: CharacterTeamType[];
  relatives: CharacterRelativeType[];
  allies: CharacterAllyType[];
  enemies: CharacterEnemyType[];
  createdAt: string;
  updatedAt: string;
};
