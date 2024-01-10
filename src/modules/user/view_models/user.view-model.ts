import { UserEntity } from '../entities/user.entity';
import { UserType } from '../types/user.type';

export class UserViewModel {
  private constructor() {
    throw new Error('UserViewModel is a static class and should not be instantiated');
  }

  public static toHttp(user: UserEntity): UserType {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }
}
