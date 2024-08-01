import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtemplatedrivenComponent } from './customtemplatedriven.component';

describe('CustomtemplatedrivenComponent', () => {
  let component: CustomtemplatedrivenComponent;
  let fixture: ComponentFixture<CustomtemplatedrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomtemplatedrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomtemplatedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
