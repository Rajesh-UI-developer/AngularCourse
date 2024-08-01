import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecyclechild',
  standalone: true,
  imports: [],
  templateUrl: './lifecyclechild.component.html',
  styleUrl: './lifecyclechild.component.scss'
})
export class LifecyclechildComponent {
  @Input() value: string = ''; // recieveing data function
  constructor() {
    console.log('Child Constructor');
  }

  ngOnChanges() {
    console.log('Child ngOnChanges');
  }

  ngOnInit() {
    console.log('Child ngOnInit');
  }

  ngDoCheck() {
    console.log('Child ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Child ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child ngOnDestroy');
  }

}
