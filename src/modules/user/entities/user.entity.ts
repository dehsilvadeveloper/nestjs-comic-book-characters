import { Exclude } from 'class-transformer';

export class UserEntity {
  id: number;
  name: string | null;
  email: string;
  @Exclude()
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
