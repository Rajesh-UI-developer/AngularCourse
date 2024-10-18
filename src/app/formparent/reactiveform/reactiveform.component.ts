import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, userData } from './users.model';
interface UserForm {
  name: string;
  lastname: string;
  email: string;
  phonenumber: string;
  password: string;
  confirmpassword: string;
}
@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
export class ReactiveformComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
      ]],
      confirmpassword: ['', Validators.required],

      // address: this.fb.group({
      //   street: ['', []],
      //   City: ['', []],
      //   Zipcode: ['', []]
      // }),

      // Qualifications: this.fb.group({
      //   sslc: ['', []],
      //   ug: ['', []],
      //   pg: ['', []]
      // })

    }, { validators: this.passwordMatchValidator });
  } // Constructor Close brace


  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmpassword = form.get('confirmpassword')?.value;
    return password === confirmpassword ? null : { mismatch: true };
  }
  onEdit() {
    const userData: UserForm = {
      name: 'Rajesh',
      lastname: 'Vel',
      email: 'rajesh@gmail.com',
      phonenumber: '9956458765',
      password: 'Rajesh1234@',
      confirmpassword: 'Rajesh1234@'
    };

    // Set the values to the form
    this.userForm.patchValue(userData);
    // this.userForm.setValue(userData);
  }

  onSubmit() {
    console.log(this.userForm);

    if (!this.userForm.invalid) {
      const FormValue: UserForm = this.userForm.value
      console.log(FormValue);
    } else {
      console.log('Form Invalid');

    }
  }


}