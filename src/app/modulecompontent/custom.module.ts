// src/app/custom.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customcomponent1Component } from './customcomponent1/customcomponent1.component';
import { Customcomponent2Component } from './customcomponent2/customcomponent2.component'; 

@NgModule({
  declarations: [
    Customcomponent1Component,
    Customcomponent2Component, // Declare components
  ],
  imports: [CommonModule],
  providers:[],
  exports: [
    Customcomponent1Component,
    Customcomponent2Component, // Export components for use in other modules or standalone components
  ],
})
export class CustomModule {}
