import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // const isAuthenticated = this.checkAuthenticationStatus();
        // const isAuthenticated = true;
        const userRoles = this.getUserRoles(); // Retrieve user roles

        const requiredRoles = route.data['roles'] as Array<string>; // Get required roles from route data

        if (requiredRoles && !this.hasRequiredRoles(userRoles, requiredRoles)) {
            // alert("You Don't have permission..." );
            this.router.navigate(['/']); // Navigate to the login page if not authenticated or not authorized
            return false;
        }

        return true;
    }

    // checkAuthenticationStatus(): boolean {
    //     // Replace with actual authentication check logic
    //     const token = localStorage.getItem('authToken');
    //     return !!token; // Check if token exists, assuming you're using token-based auth
    // }

    getUserRoles(): string[] {
        // Replace this with your logic to get the user's roles
        // For example, you might retrieve this from local storage or a user service
        // return JSON.parse(localStorage.getItem('userRoles') || '[]');
        return ['user'];
    }

    hasRequiredRoles(userRoles: string[], requiredRoles: string[]): boolean {
        return requiredRoles.some(role => userRoles.includes(role)); // Check if user has any of the required roles
    }
}
