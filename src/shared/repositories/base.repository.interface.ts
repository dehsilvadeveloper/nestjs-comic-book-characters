export abstract class BaseRepository<T> {
  abstract create(entity: T): Promise<void>;
  abstract save(entity: T): Promise<void>;
  abstract findAll(): Promise<T[]>;
  abstract findById(id: number): Promise<T | null>;
  abstract findFirst(id: number): Promise<T | null>;
}
