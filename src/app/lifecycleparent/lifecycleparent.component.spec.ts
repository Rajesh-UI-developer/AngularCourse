import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleparentComponent } from './lifecycleparent.component';

describe('LifecycleparentComponent', () => {
  let component: LifecycleparentComponent;
  let fixture: ComponentFixture<LifecycleparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
