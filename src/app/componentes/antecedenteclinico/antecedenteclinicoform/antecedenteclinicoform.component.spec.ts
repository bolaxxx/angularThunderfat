import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedenteclinicoformComponent } from './antecedenteclinicoform.component';

describe('AntecedenteclinicoformComponent', () => {
  let component: AntecedenteclinicoformComponent;
  let fixture: ComponentFixture<AntecedenteclinicoformComponent>;

  beforeEach(async(() => {
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
