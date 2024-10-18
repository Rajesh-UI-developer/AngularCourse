import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
@Injectable({
  providedIn: 'root'
})
export class UnittestingService {

   apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
