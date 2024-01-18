import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UnauthorizedError } from '../errors/unauthorized.error';

@Injectable()
export class UnauthorizedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const errorTypes = this.getInterceptableErrors();

    return next.handle().pipe(
      catchError(error => {
        if (errorTypes.some(errorType => error instanceof errorType)) {
          throw new UnauthorizedException(error.message);
        }

        throw error;
      }),
    );
  }

  private getInterceptableErrors(): any[] {
    return [UnauthorizedError];
  }
}
