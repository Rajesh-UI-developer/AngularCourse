import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildoutputComponent } from './childoutput.component';

describe('ChildoutputComponent', () => {
  let component: ChildoutputComponent;
  let fixture: ComponentFixture<ChildoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildoutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
