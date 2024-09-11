import { Component } from '@angular/core';
import { SecondcompoComponent } from '../secondcompo/secondcompo.component';

@Component({
  selector: 'app-firstcomponent',
  standalone: true,
  imports: [SecondcompoComponent],
  templateUrl: './firstcomponent.component.html',
  // template: `<h1> Rederning Components</h1>`,
  // styleUrl: './firstcomponent.component.scss'
  styles: ``
})
export class FirstcomponentComponent {
  name: string = "Rajesh"
}
