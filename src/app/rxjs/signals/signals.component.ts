import { NgIf } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [NgIf],
  template: ` <div>
      <h1>Counter: {{ count() }}</h1>
      <h1>Counter Value doubled: {{ total() }}</h1>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
       <p *ngIf="message">{{ message() }}</p>
    </div>`
})
export class SignalsComponent {
  // Define a signal for the count state
  count = signal(0);
  total = computed(() => this.count() * 2); // Derived signal
  message = signal('');

  constructor() {
    // Define an effect that runs whenever `count` changes
    effect(() => {
      if (this.count() > 5) {
        this.message.set('Count is greater than 5!');
      } else {
        this.message.set('');
      }
    },
    { allowSignalWrites: true }
  );
  }

  // Method to increment the count signal
  increment() {
    this.count.update(value => value + 1);
  }

  // Method to decrement the count signal
  decrement() {
    this.count.update(value => value - 1);
  }

  // Method to reset the count signal to 0
  reset() {
    this.count.set(0);
  }
}
