import { format } from 'date-fns';
import { SuccessfulAuthType } from '../types/successful-auth.type';

export class SuccessfulAuthViewModel {
  private constructor() {
    throw new Error('SuccessfulAuthViewModel is a static class and should not be instantiated');
  }

  public static toHttp({ accessToken, expiresAt }: { accessToken: string; expiresAt: Date }): SuccessfulAuthType {
    return {
      accessToken: accessToken,
      expiresAt: format(expiresAt, 'yyyy-MM-dd HH:mm:ss'),
    };
  }
}
