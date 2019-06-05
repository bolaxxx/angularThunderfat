import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteformComponent } from './pacienteform.component';

describe('PacienteformComponent', () => {
  let component: PacienteformComponent;
  let fixture: ComponentFixture<PacienteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
