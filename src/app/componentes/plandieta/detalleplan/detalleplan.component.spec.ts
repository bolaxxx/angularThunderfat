import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleplanComponent } from './detalleplan.component';

describe('DetalleplanComponent', () => {
  let component: DetalleplanComponent;
  let fixture: ComponentFixture<DetalleplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
