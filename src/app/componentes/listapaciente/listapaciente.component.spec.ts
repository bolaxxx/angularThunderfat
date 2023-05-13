import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListapacienteComponent } from './listapaciente.component';

describe('ListapacienteComponent', () => {
  let component: ListapacienteComponent;
  let fixture: ComponentFixture<ListapacienteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
