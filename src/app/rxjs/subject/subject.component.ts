import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  private subject = new Subject<number>();
  observer1Value!: number;
  observer2Value!: number;
  observer3Value!: number;
  private counter = 0;

  constructor() {
    // Two observers subscribe to the same subject
    this.subject.subscribe(value => this.observer1Value = value + 2);
    this.subject.subscribe(value => this.observer2Value = value + 4);
    this.subject.subscribe(value => this.observer3Value = value + 7);
  }

  emitValue(): void {
    this.counter += 1;
    this.subject.next(this.counter); // Emit the value to all subscribers
  }
}
