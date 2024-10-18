import { Component, ContentChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import { LifecyclechildComponent } from './lifecyclechild/lifecyclechild.component';
import { LifecyclesubchildComponent } from './lifecyclesubchild/lifecyclesubchild.component';

@Component({
  selector: 'app-lifecycleparent',
  standalone: true,
  imports: [LifecyclechildComponent, LifecyclesubchildComponent],
  templateUrl: './lifecycleparent.component.html',
  styleUrl: './lifecycleparent.component.scss'
})
export class LifecycleparentComponent {
  @Input() value: string = '';
  @ContentChild('contentchild') contentchild!: ElementRef;

  // constructor() {
  //   console.log('Parent Constructor');
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('Parent ngOnChanges', changes);
  //   // if (changes['value'].firstChange) {
  //   //   console.log('If Condition', changes['value'].currentValue);

  //   // } else {
  //   //   console.log('Else Condition', changes['value'].currentValue);
  //   //   console.log('Else Condition', changes['value'].previousValue);
  //   // }

  // }

  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }

  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }

  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit', this.contentchild.nativeElement);
  }

  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked', this.contentchild.nativeElement);
  }

  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Parent ngOnDestroy');
  }

}
