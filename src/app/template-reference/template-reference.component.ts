import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  standalone: true,
  imports: [],
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.scss'
})
export class TemplateReferenceComponent {
  result: string = "";

  TemplateFunc(value: string) {
    this.result = value
  }
}
