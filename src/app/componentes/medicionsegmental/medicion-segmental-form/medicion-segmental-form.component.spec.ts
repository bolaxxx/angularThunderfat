import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicionSegmentalFormComponent } from './medicion-segmental-form.component';

describe('MedicionSegmentalFormComponent', () => {
  let component: MedicionSegmentalFormComponent;
  let fixture: ComponentFixture<MedicionSegmentalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicionSegmentalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicionSegmentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
