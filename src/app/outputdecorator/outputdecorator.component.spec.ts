import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputdecoratorComponent } from './outputdecorator.component';

describe('OutputdecoratorComponent', () => {
  let component: OutputdecoratorComponent;
  let fixture: ComponentFixture<OutputdecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputdecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
