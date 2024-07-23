import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss'
})
export class NgforComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
  ];


}
