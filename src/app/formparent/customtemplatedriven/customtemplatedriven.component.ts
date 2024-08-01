import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm ,NgModel} from '@angular/forms';

@Component({
  selector: 'app-customtemplatedriven',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './customtemplatedriven.component.html',
  styleUrl: './customtemplatedriven.component.scss'
})
export class CustomtemplatedrivenComponent {
  model: any = {};

  // Define constraints
  firstNameMinLength = 2;
  firstNameMaxLength = 30;
  lastNameMinLength = 2;
  lastNameMaxLength = 30;

  // Custom validation functions
  firstNameErrors(firstName: NgModel): string | null {
    if (!firstName?.value) {
      return 'First Name is required.';
    }
    if (firstName?.value.length < this.firstNameMinLength) {
      return `First Name must be at least ${this.firstNameMinLength} characters long.`;
    }
    if (firstName?.value.length > this.firstNameMaxLength) {
      return `First Name cannot be more than ${this.firstNameMaxLength} characters long.`;
    }
    return null;
  }

  lastNameErrors(lastName: NgModel): string | null {
    if (!lastName.value) {
      return 'Last Name is required.';
    }
    if (lastName.value.length < this.lastNameMinLength) {
      return `Last Name must be at least ${this.lastNameMinLength} characters long.`;
    }
    if (lastName.value.length > this.lastNameMaxLength) {
      return `Last Name cannot be more than ${this.lastNameMaxLength} characters long.`;
    }
    return null;
  }

  emailErrors(email: NgModel): string | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value) {
      return 'Email is required.';
    }
    if (!emailPattern.test(email.value)) {
      return 'Invalid email format.';
    }
    return null;
  }

  passwordErrors(password: NgModel): string | null {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!password.value) {
      return 'Password is required.';
    }
    if (!passwordPattern.test(password.value)) {
      return 'Password must be at least 6 characters long, contain at least one number, one lowercase letter, and one uppercase letter.';
    }
    return null;
  }

  confirmPasswordErrors(confirmPassword: NgModel): string | null {
    if (!confirmPassword.value) {
      return 'Confirm Password is required.';
    }
    if (this.model.password !== confirmPassword.value) {
      return 'Passwords must match.';
    }
    return null;
  }

  passwordsMatch(): boolean {
    return this.model.password === this.model.confirmPassword;
  }

  isFormValid(form: NgForm): boolean {
    const firstName = form.controls['firstName'] as unknown as NgModel;
    const lastName = form.controls['lastName'] as unknown as NgModel;
    const email = form.controls['email'] as unknown as NgModel;
    const password = form.controls['password'] as unknown as NgModel;
    const confirmPassword = form.controls['confirmPassword'] as unknown as NgModel;

    return (
      this.firstNameErrors(firstName) === null &&
      this.lastNameErrors(lastName) === null &&
      this.emailErrors(email) === null &&
      this.passwordErrors(password) === null &&
      this.confirmPasswordErrors(confirmPassword) === null &&
      this.passwordsMatch()
    );
  }

  onSubmit(form: NgForm) {
    if (this.isFormValid(form)) {
      console.log('Form Submitted!', this.model);
    } else {
      console.log('Form is invalid');
    }
  }
}
