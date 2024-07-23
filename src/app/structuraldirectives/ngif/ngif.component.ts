import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss'
})
export class NgifComponent {
  isVisible: boolean = true;
  toggleVisibility() {
    this.isVisible = !this.isVisible
  }
}
