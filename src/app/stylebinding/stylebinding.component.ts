import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { HoverHighlightDirective } from './customattributedirective/customdirective';

@Component({
  selector: 'app-stylebinding',
  standalone: true,
  imports: [NgStyle,HoverHighlightDirective],
  templateUrl: './stylebinding.component.html',
  styleUrl: './stylebinding.component.scss'
})
export class StylebindingComponent {
  isActive: boolean = false;
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
