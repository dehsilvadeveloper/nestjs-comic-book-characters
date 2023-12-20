import { CharacterRelativeType } from "./character-relative.type";
import { CharacterAllyType } from "./character-ally.type";
import { CharacterEnemyType } from "./character-enemy.type";

export type CharacterType = {
  id: number;
  name: string;
  civilName: string | null;
  gender: string;
  alignment: string;
  maritalStatus: string;
  livingStatus: string;
  powers: string[];
  teams: string[];
  relatives: CharacterRelativeType[];
  allies: CharacterAllyType[];
  enemies: CharacterEnemyType[];
  createdAt: string;
  updatedAt: string;
};
