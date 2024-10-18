import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiserviceService } from './apiintegration/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: ApiserviceService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'Token'; // Get the access token from AuthService
let tokenExpriry=false;
    // Define a list of URLs to skip the Authorization header
    const excludedUrls = [
      '/api/public',    // Example public API route
      '/api/no-auth',   // Another API route that doesn't require auth
    ];
  
    // Check if the URL is in the excluded list
    const shouldSkipAuth = excludedUrls.some(url => req.url.includes(url));

    let authReq = req;

    // Only add the Authorization header if the URL is NOT excluded
    if (!shouldSkipAuth && authToken) {
      console.log('inss');
      
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
    }
    console.log('outt');
    

    // Handle the outgoing request
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // If we get a 401 error, it means the token has expired or is invalid
        if (error.status === 401) {
          // Attempt to refresh the token
          return this.handle401Error(authReq, next);
        }
        

        // If another error occurs, pass it down the error chain
        return throwError(() => error);
      })
    );
  }

  // Handle 401 errors by refreshing the token and retrying the original request
  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.refreshToken().pipe(
      switchMap((newToken: string) => {
        // Save the new token
        // localStorage.setItem(newAuthReq)
        // this.authService.setAccessToken(newToken);

        // Clone the original request and add the new token to the Authorization header
        const newAuthReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${newToken}`)
        });

        // Retry the original request with the new token
        return next.handle(newAuthReq).pipe(
          catchError((error: HttpErrorResponse) => {
            // If we get a 401 error, it means the token has expired or is invalid
            if (error.status === 401) {
              // navigator(['/login'])
              // Attempt to refresh the token
            }
            
    
            // If another error occurs, pass it down the error chain
            return throwError(() => error);
          })
        );
      }),
      catchError((error) => {
        // If refreshing the token fails, logout the user or navigate to the login page
        return throwError(() => error);
      })
    );
  }
}
