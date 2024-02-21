export interface CharacterUpdatedParams {
  id: number;
  name: string;
}

export class CharacterUpdatedEvent {
  private _id: number;
  private _name: string;

  constructor(params: CharacterUpdatedParams) {
    this.setId(params);
    this.setName(params);
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  private setId(params: CharacterUpdatedParams): void {
    this._id = params.id;
  }

  private setName(params: CharacterUpdatedParams): void {
    this._name = params.name;
  }
}
