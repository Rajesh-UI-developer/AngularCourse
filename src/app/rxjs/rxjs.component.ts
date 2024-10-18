import { Component } from '@angular/core';
import { SubjectComponent } from './subject/subject.component';
import { ObservableComponent } from './observable/observable.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [SubjectComponent,ObservableComponent,SignalsComponent],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

}
