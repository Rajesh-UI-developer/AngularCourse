import { Component } from '@angular/core';
import { DataService } from '../dataservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-service-com',
  standalone: true,
  imports: [NgFor],
  templateUrl: './service-com.component.html',
  styleUrl: './service-com.component.scss'
})
export class ServiceComComponent {
  items: string[] = [];

  constructor(private dataService: DataService) {
    this.items = this.dataService.getData$();
    // this.dataService.getData$().subscribe(data => {
    //   this.items = data; // Update the items list whenever data changes
    // });
  }

  addItem(input: HTMLInputElement) {
    const value = input.value.trim();
    if (value) {
      this.dataService.addData(value);
      // this.items = this.dataService.getData(); // Refresh the items list
      input.value = ''; // Clear the input field
    }
  }
}
