import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childinput',
  standalone: true,
  imports: [],
  templateUrl: './childinput.component.html',
  styleUrl: './childinput.component.scss'
})
export class ChildinputComponent {
  // 1st
  @Input() dataFromParent: string = '';

}
