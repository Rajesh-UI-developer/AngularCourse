import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customcomponent1Component } from './customcomponent1.component';

describe('Customcomponent1Component', () => {
  let component: Customcomponent1Component;
  let fixture: ComponentFixture<Customcomponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customcomponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
