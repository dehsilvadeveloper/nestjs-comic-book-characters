import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CharacterRelationshipInvalidError } from '@modules/character/errors/character-relationship-invalid.error';
import { CharacterAlliesEmptyError } from '@modules/character/errors/character-allies-empty.error';
import { CharacterEnemiesEmptyError } from '@modules/character/errors/character-enemies-empty.error';
import { CharacterPowersEmptyError } from '@modules/character/errors/character-powers-empty.error';
import { CharacterRelativesEmptyError } from '@modules/character/errors/character-relatives-empty.error';
import { CharacterTeamsEmptyError } from '@modules/character/errors/character-teams-empty.error';

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
    return [
      CharacterRelationshipInvalidError,
      CharacterAlliesEmptyError,
      CharacterEnemiesEmptyError,
      CharacterPowersEmptyError,
      CharacterRelativesEmptyError,
      CharacterTeamsEmptyError,
    ];
  }
}
