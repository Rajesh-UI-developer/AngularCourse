import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
      name: ['Rajesh', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastname: ['Vel', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
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
    const userData = {
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
    if (!this.userForm.invalid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form Invalid');

    }
  }
}