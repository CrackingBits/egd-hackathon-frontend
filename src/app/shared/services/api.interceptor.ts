import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Apply the headers
    const token: any = localStorage.getItem('token'); // OPTIMIZE
    req = req.clone({
      setHeaders: { Authorization: 'Bearer ' + token },
    });

    // Also handle errors globally
    return next.handle(req).pipe(
      tap(
        (x) => x,
        (err) => {
          // Handle this err
          console.error(
            `Error performing request, status code = ${err.status}`
          );
        }
      )
    );
  }
}
