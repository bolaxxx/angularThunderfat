import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MediciongeneralComponent } from './mediciongeneral.component';

describe('MediciongeneralComponent', () => {
  let component: MediciongeneralComponent;
  let fixture: ComponentFixture<MediciongeneralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MediciongeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediciongeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
