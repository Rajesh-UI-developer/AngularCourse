import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  standalone: true,
  imports: [],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.scss'
})
export class EventbindingComponent {
  text: string = "Default text"
  dynamicStyle: object = {
    fontSize: '30px',
    color: 'blue',
    fontStyle: 'normal'
  }
  
  FontStyle() {
    this.dynamicStyle = {
      fontSize: '50px',
      color: 'red',
      fontStyle: 'italic'
    }
  }

  FontStyleRevert() {
    this.dynamicStyle = {
      fontSize: '30px',
      color: 'blue',
      fontStyle: 'normal'
    }
  }

  InputText(event: Event) {
    console.log(event);
    this.text = (<HTMLInputElement>event.target).value
  }

  
}
