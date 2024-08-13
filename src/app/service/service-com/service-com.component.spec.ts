import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComComponent } from './service-com.component';

describe('ServiceComComponent', () => {
  let component: ServiceComComponent;
  let fixture: ComponentFixture<ServiceComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
