import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {KEY_AUTH_STORAGE} from '../app.constantes';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const auth = JSON.parse(localStorage.getItem(KEY_AUTH_STORAGE));
    if (auth && auth.token) {
        request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${auth.token}`
        }
      });
    }

    return next.handle(request);
  }
}
