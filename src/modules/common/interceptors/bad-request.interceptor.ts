import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CharacterRelationshipInvalidError } from '@modules/character/errors/character-relationship-invalid.error';

@Injectable()
export class BadRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const errorTypes = this.getInterceptableErrors();

    return next.handle().pipe(
      catchError(error => {
        if (errorTypes.some(errorType => error instanceof errorType)) {
          throw new BadRequestException(error.message);
        }

        throw error;
      }),
    );
  }

  private getInterceptableErrors(): any[] {
    return [CharacterRelationshipInvalidError];
  }
}
