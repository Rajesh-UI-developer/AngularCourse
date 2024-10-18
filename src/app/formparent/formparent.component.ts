import { Component } from '@angular/core';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { CustomtemplatedrivenComponent } from './customtemplatedriven/customtemplatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';

@Component({
  selector: 'app-formparent',
  standalone: true,
  imports: [TemplatedrivenComponent,CustomtemplatedrivenComponent,ReactiveformComponent,DynamicformComponent],
  templateUrl: './formparent.component.html',
  styleUrl: './formparent.component.scss'
})
export class FormparentComponent {

}
