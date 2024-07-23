import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildinputComponent } from './childinput.component';

describe('ChildinputComponent', () => {
  let component: ChildinputComponent;
  let fixture: ComponentFixture<ChildinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
