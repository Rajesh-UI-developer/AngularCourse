import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CanLoadGuard implements CanMatch  {
    constructor(private router: Router) { }
    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        // Implement your logic here. For example, check if the user is authenticated:
        // const isAuthenticated = this.checkAuthenticationStatus();
        const isAuthenticated = true;
        if (!isAuthenticated) {
            // Optionally navigate to a login page or show a message
            this.router.navigate(['/']); // Navigate to the login page if not authenticated or not authorized
            return false;
        }
        return true; // Allow loading the module
    }

    checkAuthenticationStatus(): boolean {
        // Replace this with your actual authentication check logic
        const token = localStorage.getItem('authToken');
        return !!token; // Return true if authenticated
    }
}
