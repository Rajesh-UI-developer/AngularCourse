import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  standalone: true,
  imports: [NgClass],
  templateUrl: './classbinding.component.html',
  styleUrl: './classbinding.component.scss'
})
export class ClassbindingComponent {
  className: Array<string> = ["textSize", "className"]
  isColor: boolean = true;
  issize: boolean = true;
  isstyle: boolean = true;
  isTextColor: boolean = true;

  condtionBased: object = {
    "textColor": this.isColor,
    "textSize": this.issize,
    "textStyle": this.isstyle,
  }

  classFunction(){
    return {
      "textColorBlue": this.isColor,
      "textSize": this.issize,
      "textStyle": this.isstyle,
    }
  }
}
