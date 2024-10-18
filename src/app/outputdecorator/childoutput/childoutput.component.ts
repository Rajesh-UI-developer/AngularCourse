import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-childoutput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './childoutput.component.html',
  styleUrl: './childoutput.component.scss'
})
export class ChildoutputComponent {
  @Output() data = new EventEmitter<string>();
  
  // Output property
  text: string = 'Text From Child Component!';

  ChildToParent() {
    this.data.emit(this.text);  // Emit an event with data
  }
  
  inputChange(event: Event) {
    this.data.emit((<HTMLInputElement>event.target).value);  // Emit an event with data
  }

}
