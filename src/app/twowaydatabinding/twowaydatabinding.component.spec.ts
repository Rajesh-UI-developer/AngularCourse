import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydatabindingComponent } from './twowaydatabinding.component';

describe('TwowaydatabindingComponent', () => {
  let component: TwowaydatabindingComponent;
  let fixture: ComponentFixture<TwowaydatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowaydatabindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaydatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
