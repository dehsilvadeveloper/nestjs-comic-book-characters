export interface CharacterDeletedParams {
  id: number;
}

export class CharacterDeletedEvent {
  private _id: number;

  constructor(params: CharacterDeletedParams) {
    this.setId(params);
  }

  public get id(): number {
    return this._id;
  }

  private setId(params: CharacterDeletedParams): void {
    this._id = params.id;
  }
}
