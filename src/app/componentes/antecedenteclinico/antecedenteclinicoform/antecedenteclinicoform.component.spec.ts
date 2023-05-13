import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AntecedenteclinicoformComponent } from './antecedenteclinicoform.component';

describe('AntecedenteclinicoformComponent', () => {
  let component: AntecedenteclinicoformComponent;
  let fixture: ComponentFixture<AntecedenteclinicoformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedenteclinicoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedenteclinicoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
