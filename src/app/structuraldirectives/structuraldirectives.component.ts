import { Component } from '@angular/core';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@Component({
  selector: 'app-structuraldirectives',
  standalone: true,
  imports: [NgifComponent,NgforComponent,NgswitchComponent],
  templateUrl: './structuraldirectives.component.html',
  styleUrl: './structuraldirectives.component.scss'
})
export class StructuraldirectivesComponent {

}
