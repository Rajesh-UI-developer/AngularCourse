import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareingComponent } from './shareing.component';

describe('ShareingComponent', () => {
  let component: ShareingComponent;
  let fixture: ComponentFixture<ShareingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
