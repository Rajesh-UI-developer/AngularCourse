import { Component } from '@angular/core';
import { DataService } from '../dataservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shareing',
  standalone: true,
  imports: [NgFor],
  templateUrl: './shareing.component.html',
  styleUrl: './shareing.component.scss'
})
export class ShareingComponent {
  items: string[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData$().subscribe(data => {
      this.items = data; // Update the list whenever data changes
    });
  }
}
