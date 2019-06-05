import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediciongeneralComponent } from './mediciongeneral.component';

describe('MediciongeneralComponent', () => {
  let component: MediciongeneralComponent;
  let fixture: ComponentFixture<MediciongeneralComponent>;

  beforeEach(async(() => {
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
