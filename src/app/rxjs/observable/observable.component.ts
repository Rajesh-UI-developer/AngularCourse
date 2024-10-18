import { Component } from '@angular/core';
import { interval, Observable, of, take } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {
  arr = [1, 2, 3];
  newArr: any;
  ngOnInit(): void {
    // Creating an observable
    const numberObservable = new Observable<number>(observer => {
      observer.next(1); // Emit value 1
      observer.next(2); // Emit value 2
      // observer.error('Error Occured'); // Error
      observer.next(3); // Emit value 3

      setTimeout(() => {
        observer.next(5); // Emit value 3
        observer.complete(); // Signal the completion of the observable
      }, 3000);
    });

    // Subscribing to the observable
    // numberObservable.subscribe({
    //   next(value) { console.log('Next:', value); }, // Handle each emitted value
    //   error(err) { console.error('Something went wrong:', err); }, // Handle error (if any)
    //   complete() { console.log('Observable completed Observa.'); }, // Handle completion
    // });

    // this.newArr = this.arr.flatMap((item) => {
    //   console.log(item + 'Modified');
    //   return [item, item + 2]
    // })
    // console.log(this.newArr);

    // Create an observable that emits values every second
    const timerObservable = interval(2000).pipe(
      take(5), // Take only the first 5 values emitted by the observable
      map(value => `Value emitted: ${value}`) // Transform the emitted values
    );

    // Subscribe to the observable
    // timerObservable.subscribe({
    //   next: value => console.log('Emitting Value Interval', value),
    //   complete: () => console.log('Observable completed.')
    // });




    of(1, 2, 3).pipe(
      map(value => value * 2)
    ).subscribe({
      next: value => console.log('Of Observable :', value), // Output: 2, 4, 6
      complete: () => console.log('Completed')
    });

  }







}
