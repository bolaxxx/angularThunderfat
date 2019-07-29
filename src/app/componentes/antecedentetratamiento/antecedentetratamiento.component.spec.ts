import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentetratamientoComponent } from './antecedentetratamiento.component';

describe('AntecedentetratamientoComponent', () => {
  let component: AntecedentetratamientoComponent;
  let fixture: ComponentFixture<AntecedentetratamientoComponent>;

  beforeEach(async(() => {
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
