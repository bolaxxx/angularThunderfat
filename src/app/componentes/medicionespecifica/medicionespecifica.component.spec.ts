import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MedicionespecificaComponent } from './medicionespecifica.component';

describe('MedicionespecificaComponent', () => {
  let component: MedicionespecificaComponent;
  let fixture: ComponentFixture<MedicionespecificaComponent>;

  beforeEach(waitForAsync(() => {
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
