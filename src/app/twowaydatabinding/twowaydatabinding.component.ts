import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaydatabinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twowaydatabinding.component.html',
  styleUrl: './twowaydatabinding.component.scss'
})
export class TwowaydatabindingComponent {
  Text: string = 'Default text from ts component'
  Checkbox: boolean = false;
  radiobtns: string = 'Option1';
}
