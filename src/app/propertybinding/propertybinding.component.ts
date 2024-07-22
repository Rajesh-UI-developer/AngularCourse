import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  standalone: true,
  imports: [],
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.scss'
})
export class PropertybindingComponent {
  img: string = "https://miro.medium.com/v2/resize:fit:828/format:webp/1*bMgQ8MhbnQexpqHgIgBJPA.png";
  isDisabled: boolean = true;
  isTextColor: string = "color-red";
  isFontSize: string = "font-size:56px"

}
