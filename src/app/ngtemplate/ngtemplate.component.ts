import { Component } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgcontenttwoComponent } from './ngcontenttwo/ngcontenttwo.component';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet,NgcontentComponent,NgcontenttwoComponent],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.scss'
})
export class NgtemplateComponent {
  condition: boolean = false;

  toggle() {
    this.condition = !this.condition;
  }
}
