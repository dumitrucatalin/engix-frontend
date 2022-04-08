import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AppStateStoreService } from '../services/store/app-state-store.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private appStateStore: AppStateStoreService,
    private router: Router
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("intercepted");
    this.appStateStore.setLoading(true);
    return next.handle(request).pipe(
      tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          this.appStateStore.setLoading(false);
        }
      }),
      catchError((response) => {
        if (response instanceof HttpErrorResponse) {
          if (response.status === 401) {
            this.router.navigateByUrl(`/reservations/add`);
          }
          this.appStateStore.setLoading(false);
        }
        return throwError(response);
      })
    );
  }
}
