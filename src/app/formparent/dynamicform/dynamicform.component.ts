import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf,CommonModule],
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.scss'
})
export class DynamicformComponent {
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  get items(): FormArray {
    return this.dynamicForm.get('items') as FormArray;
  }

  addItem() {
    const itemGroup = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
    });
    this.items.push(itemGroup);
    console.log(this.dynamicForm);
    
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
