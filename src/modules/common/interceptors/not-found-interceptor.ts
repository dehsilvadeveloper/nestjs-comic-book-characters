import { Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CharacterNotFoundError } from '@modules/character/errors/character-not-found.error';
import { UserNotFoundError } from '@modules/user/errors/user-not-found.error';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (error.constructor in this.getMappableErrors()) {
          throw new NotFoundException(error.message);
        }

        throw error;
      }),
    );
  }

  private getMappableErrors(): any[] {
    return [CharacterNotFoundError, UserNotFoundError];
  }
}
