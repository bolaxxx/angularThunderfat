import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AntecedenteclinicoComponent } from './antecedenteclinico.component';

describe('AntecedenteclinicoComponent', () => {
  let component: AntecedenteclinicoComponent;
  let fixture: ComponentFixture<AntecedenteclinicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedenteclinicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedenteclinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
