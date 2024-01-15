import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UnauthorizedError } from '../errors/unauthorized.error';

@Injectable()
export class UnautorizedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (error.constructor in this.getMappableErrors()) {
          throw new UnauthorizedException(error.message);
        }

        throw error;
      }),
    );
  }

  private getMappableErrors(): any[] {
    return [UnauthorizedError];
  }
}
