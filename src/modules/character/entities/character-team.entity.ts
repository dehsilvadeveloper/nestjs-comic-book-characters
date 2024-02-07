export class CharacterTeamEntity {
  id: number;
  addedAt: Date;
  status: string;
  role: string;
  team: {
    id: number;
    name: string;
  };
}
