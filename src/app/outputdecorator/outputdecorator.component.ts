import { Component } from '@angular/core';
import { ChildoutputComponent } from './childoutput/childoutput.component';

@Component({
  selector: 'app-outputdecorator',
  standalone: true,
  imports: [ChildoutputComponent],
  templateUrl: './outputdecorator.component.html',
  styleUrl: './outputdecorator.component.scss'
})
export class OutputdecoratorComponent {
  textfromchild: string = '';


  DataRecieved(event: string) {
    this.textfromchild = event;
  }

  
}
