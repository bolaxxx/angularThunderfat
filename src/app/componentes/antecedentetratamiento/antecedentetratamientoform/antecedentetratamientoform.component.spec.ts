import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AntecedentetratamientoformComponent } from './antecedentetratamientoform.component';

describe('AntecedentetratamientoformComponent', () => {
  let component: AntecedentetratamientoformComponent;
  let fixture: ComponentFixture<AntecedentetratamientoformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentetratamientoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentetratamientoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
