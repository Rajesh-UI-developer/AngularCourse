import { Component } from '@angular/core';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { CustomtemplatedrivenComponent } from './customtemplatedriven/customtemplatedriven.component';

@Component({
  selector: 'app-formparent',
  standalone: true,
  imports: [TemplatedrivenComponent,CustomtemplatedrivenComponent],
  templateUrl: './formparent.component.html',
  styleUrl: './formparent.component.scss'
})
export class FormparentComponent {

}
