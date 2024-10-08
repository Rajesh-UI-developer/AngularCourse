import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindingComponent } from './classbinding.component';

describe('ClassbindingComponent', () => {
  let component: ClassbindingComponent;
  let fixture: ComponentFixture<ClassbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassbindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
