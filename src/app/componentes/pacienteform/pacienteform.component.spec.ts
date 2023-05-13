import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PacienteformComponent } from './pacienteform.component';

describe('PacienteformComponent', () => {
  let component: PacienteformComponent;
  let fixture: ComponentFixture<PacienteformComponent>;

  beforeEach(waitForAsync(() => {
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
