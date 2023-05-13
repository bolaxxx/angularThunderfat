import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MedicionsegmentalComponent } from './medicionsegmental.component';

describe('MedicionsegmentalComponent', () => {
  let component: MedicionsegmentalComponent;
  let fixture: ComponentFixture<MedicionsegmentalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicionsegmentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicionsegmentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
