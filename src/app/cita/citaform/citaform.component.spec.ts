import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaformComponent } from './citaform.component';

describe('CitaformComponent', () => {
  let component: CitaformComponent;
  let fixture: ComponentFixture<CitaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
