export abstract class BaseRepository<Entity, FilterDto> {
  abstract create(entity: Entity): Promise<Entity>;
  abstract save(entity: Entity): Promise<Entity>;
  abstract delete(id: number): Promise<boolean>;
  abstract getAll(): Promise<Entity[]>;
  abstract getByField(field: string, value: any): Promise<Entity[]>;
  abstract getWhere(where: FilterDto): Promise<Entity[]>;
  abstract firstById(id: number): Promise<Entity | null>;
  abstract firstByField(field: string, value: any): Promise<Entity | null>;
  abstract firstWhere(where: FilterDto): Promise<Entity | null>;
}
