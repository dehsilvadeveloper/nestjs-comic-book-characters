export class CharacterRelativeEntity {
  id: number;
  addedAt: Date;
  relationship: {
    id: number;
    name: string;
  };
  relative: {
    id: number;
    name: string;
    civilName: string | null;
  };
}
