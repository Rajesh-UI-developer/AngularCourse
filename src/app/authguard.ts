import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        // const isAuthenticated = this.checkAuthenticationStatus();
        const isAuthenticated = false

        if (!isAuthenticated) {
            this.router.navigate(['/']); // Navigate to the login page if not authenticated
            return false;
        }

        return true;
    }

    checkAuthenticationStatus(): boolean {
        // Replace with actual authentication check logic
        const token = localStorage.getItem('authToken');
        return !!token; // Check if token exists, assuming you're using token-based auth
    }
}
