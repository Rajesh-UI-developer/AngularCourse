import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  refreshToken(): Observable<string> {
    // Simulate an API call and return a static token
    const newToken = 'static-demo-token'; // This can be any static string for testing
    console.log('Token refreshed. New token:', newToken);

    // You can also save the new token to localStorage
    localStorage.setItem('accessToken', newToken);

    // Return the new token as an Observable
    return of(newToken); // 'of()' creates an Observable that emits a single value and then completes
  }
}
