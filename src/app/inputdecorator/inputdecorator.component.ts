import { Component } from '@angular/core';
import { ChildinputComponent } from './childinput/childinput.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputdecorator',
  standalone: true,
  imports: [ChildinputComponent, FormsModule],
  templateUrl: './inputdecorator.component.html',
  styleUrl: './inputdecorator.component.scss'
})
export class InputdecoratorComponent {
  ParentData: string = 'Data Send from parent.';

  ChangeText() {
    this.ParentData = "Text has been changed!";
  }
  EmptyText() {
    this.ParentData = "";
  }
}
