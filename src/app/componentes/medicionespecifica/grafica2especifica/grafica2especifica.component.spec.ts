import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica2especificaComponent } from './grafica2especifica.component';

describe('Grafica2especificaComponent', () => {
  let component: Grafica2especificaComponent;
  let fixture: ComponentFixture<Grafica2especificaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grafica2especificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafica2especificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
