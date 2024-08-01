import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclesubchildComponent } from './lifecyclesubchild.component';

describe('LifecyclesubchildComponent', () => {
  let component: LifecyclesubchildComponent;
  let fixture: ComponentFixture<LifecyclesubchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyclesubchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyclesubchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
