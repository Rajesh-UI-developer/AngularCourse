import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './app/auth.interceptor';
import { routes } from './app/app.routes';
import { subRoutes } from './app/subroute.route';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([...subRoutes, ...routes]),
    provideHttpClient(), // Provide HttpClient
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true  // Allows multiple interceptors if needed
    },
    // provideHttpClient(withInterceptors([AuthInterceptor]))
  ]
})
  .catch((err) => console.error(err));
