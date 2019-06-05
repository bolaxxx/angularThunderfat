import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicionGeneralFormComponent } from './medicion-general-form.component';

describe('MedicionGeneralFormComponent', () => {
  let component: MedicionGeneralFormComponent;
  let fixture: ComponentFixture<MedicionGeneralFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicionGeneralFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicionGeneralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
