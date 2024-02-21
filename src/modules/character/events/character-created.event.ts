export interface CharacterCreatedParams {
  id: number;
  name: string;
}

export class CharacterCreatedEvent {
  private _id: number;
  private _name: string;

  constructor(params: CharacterCreatedParams) {
    this.setId(params);
    this.setName(params);
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  private setId(params: CharacterCreatedParams): void {
    this._id = params.id;
  }

  private setName(params: CharacterCreatedParams): void {
    this._name = params.name;
  }
}
