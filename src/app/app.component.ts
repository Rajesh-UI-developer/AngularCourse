import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropertybindingComponent, EventbindingComponent, TemplateReferenceComponent, ClassbindingComponent,StylebindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App Rendered';

}
