export class CharacterAllyEntity {
  id: number;
  ally: {
    id: number;
    name: string;
    civilName: string | null;
  };
}
