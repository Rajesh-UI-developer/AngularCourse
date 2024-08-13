import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  private dataSubject = new Subject<string[]>();
  private data: string[] = [];

  // Provide the subject as an observable to other components
  getData$(): Observable<string[]> {
    return this.dataSubject.asObservable();
  }

  addData(item: string) {
    this.data.push(item); // Update the internal data array
    this.dataSubject.next(this.data); // Emit the new data array to subscribers
  }
}
