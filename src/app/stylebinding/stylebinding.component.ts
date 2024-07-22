import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './stylebinding.component.html',
  styleUrl: './stylebinding.component.scss'
})
export class StylebindingComponent {
  isActive: boolean = true;
  textColor: string = 'blue';
  fontSize: string = '26px';
  weight: number = 900;
  backgroundColor = 'yellow';


  StyleFunction() {
    return {
      'color': this.textColor,
      'font-size': this.fontSize,
      'font-weight': this.weight,
      'background-color': this.backgroundColor
    };
  }
}
