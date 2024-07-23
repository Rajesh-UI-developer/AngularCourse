import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-ngswitch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.scss'
})
export class NgswitchComponent {
  role: string = 'guest';

  setRole(newRole: string) {
    this.role = newRole;
  }
}
