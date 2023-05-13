import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AntecedentetratamientoComponent } from './antecedentetratamiento.component';

describe('AntecedentetratamientoComponent', () => {
  let component: AntecedentetratamientoComponent;
  let fixture: ComponentFixture<AntecedentetratamientoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentetratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentetratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
