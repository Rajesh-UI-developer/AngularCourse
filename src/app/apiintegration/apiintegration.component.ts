import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-apiintegration',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgIf, FormsModule],
  templateUrl: './apiintegration.component.html',
  styleUrls: ['./apiintegration.component.scss'],
  providers: [ApiserviceService]
})
export class ApiintegrationComponent {
  users: User[] = [];


  selectedUser: User = { id: 0, name: '', email: '', phone: '' };

  isEdit = false;

  trackByUserId(index: number, user: User): number {
    return user.id;
  }

  constructor(private crudService: ApiserviceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.crudService.getUsers().subscribe(
      (data) => {
      console.log('Users fetched:', data); // Log the fetched users for debugging
      this.users = data;
    }
  );
  }

  editUser(user: User): void {
    this.selectedUser = { ...user };
    this.isEdit = true;
  }

  saveUser(): void {
    if (this.isEdit) {

      this.crudService.updateUser(this.selectedUser).subscribe(
        (updatedUser) => {
        const index = this.users.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
        this.resetForm();
      });

      
    } else {

      this.crudService.createUser(this.selectedUser).subscribe(
        (newUser) => {
        this.users.push(newUser);
        this.resetForm();
      });

    }
  }

  deleteUser(id: number): void {
    // Optimistic UI update
  
    this.crudService.deleteUser(id).subscribe(
      () => {
        console.log('User deleted successfully.');
        this.users = this.users.filter(user => user.id !== id);
        // Optionally call getUsers() here if you want to fetch the list again
      },
      (error) => {
        console.error('Error deleting user:', error);
        // Revert optimistic update if needed
        this.getUsers(); // Fetch the list again to ensure data consistency
      }
    );
  }

  resetForm(): void {
    this.selectedUser = { id: 0, name: '', email: '', phone: '' };
    this.isEdit = false;
  }
}
