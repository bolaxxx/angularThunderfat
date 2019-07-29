import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicionespecificaComponent } from './medicionespecifica.component';

describe('MedicionespecificaComponent', () => {
  let component: MedicionespecificaComponent;
  let fixture: ComponentFixture<MedicionespecificaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicionespecificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicionespecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
