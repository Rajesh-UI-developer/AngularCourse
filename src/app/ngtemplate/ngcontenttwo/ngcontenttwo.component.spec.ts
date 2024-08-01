import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontenttwoComponent } from './ngcontenttwo.component';

describe('NgcontenttwoComponent', () => {
  let component: NgcontenttwoComponent;
  let fixture: ComponentFixture<NgcontenttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgcontenttwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcontenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
