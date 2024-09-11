import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { InputdecoratorComponent } from './inputdecorator/inputdecorator.component';
import { OutputdecoratorComponent } from './outputdecorator/outputdecorator.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { LifecycleparentComponent } from './lifecycleparent/lifecycleparent.component';

import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormparentComponent } from './formparent/formparent.component';
import { PipeComponent } from './pipe/pipe.component';
import { ServiceComComponent } from './service/service-com/service-com.component';
import { ShareingComponent } from './service/shareing/shareing.component';
import { ApiintegrationComponent } from './apiintegration/apiintegration.component';
import { FirstcomponentComponent } from './newcomponent/firstcomponent/firstcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgIf, FormsModule, PropertybindingComponent, EventbindingComponent, TemplateReferenceComponent,
    ClassbindingComponent, StylebindingComponent, TwowaydatabindingComponent, InputdecoratorComponent,
    OutputdecoratorComponent, StructuraldirectivesComponent, NgtemplateComponent, LifecycleparentComponent,
    FormparentComponent, PipeComponent, ServiceComComponent, ShareingComponent, ApiintegrationComponent,FirstcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App Rendered';
  value: string = 'Rajesh';
  isTrue: boolean = false;
  defaultText: string = 'Default text';
  @ViewChild('result') result!: ElementRef;

  toggle() {
    this.isTrue = !this.isTrue; // just flipping
  }
  toggleText() {
    this.defaultText = 'Text Updated';
  }
  // ngOnInit() {
  //   console.log('App Component', this.result);
  // }
  // ngDoCheck() {
  //   console.log('DoCheck method', this.result);
  // }

  // ngAfterViewInit() {
  //   console.log('NgAfterViewInit is worked', this.result.nativeElement);
  // }

  // ngAfterViewChecked() {
  //   console.log('NgAfterViewChecked is worked', this.result.nativeElement.value);
  // }

}
