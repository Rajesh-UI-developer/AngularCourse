import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcompoComponent } from './secondcompo.component';

describe('SecondcompoComponent', () => {
  let component: SecondcompoComponent;
  let fixture: ComponentFixture<SecondcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondcompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
