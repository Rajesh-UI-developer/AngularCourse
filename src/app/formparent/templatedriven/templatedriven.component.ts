import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  // template:`<h1> Ts File</h1>`,
  templateUrl: './templatedriven.component.html',

  styleUrl: './templatedriven.component.scss'
})
export class TemplatedrivenComponent {
  user = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };


  // Validation error messages
  errorMessages = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Validate form
  validate(form: NgForm) {
    // Reset error messages
    // console.log(form);

    this.errorMessages = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    // Check individual fields
    // if (!this.user.name) this.errorMessages.name = 'Name is required';
    // if (!this.user.lastName) this.errorMessages.lastName = 'Last Name is required';
    // if (!this.user.email.includes('@')) this.errorMessages.email = 'Email is invalid';
    // if (this.user.password.length < 6) this.errorMessages.password = 'Password must be at least 6 characters';
    if (this.user.password !== this.user.confirmPassword) this.errorMessages.confirmPassword = 'Passwords do not match';

    return !Object.values(this.errorMessages).some(message => message);
   
  }

  // Custom validation on confirmPassword field change
  validateConfirmPassword(form: NgForm) {
    // console.log(form.form.controls['confirmPassword'].value);
    // console.log(form);

    console.log(this.errorMessages);



    if (this.user.password !== this.user.confirmPassword) {

      this.errorMessages.confirmPassword = 'Passwords does not match';
    } else {
      this.errorMessages.confirmPassword = '';

    }

  }


  // Form submission handler
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.validate(form));
    

    if (this.validate(form)) {
      console.log('Form Submitted', this.user);

    } else {
      console.log(this.errorMessages);

      alert('Form InValid');
    }
  }
}
