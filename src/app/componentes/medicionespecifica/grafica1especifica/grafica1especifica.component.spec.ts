import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Grafica1especificaComponent } from './grafica1especifica.component';

describe('Grafica1especificaComponent', () => {
  let component: Grafica1especificaComponent;
  let fixture: ComponentFixture<Grafica1especificaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Grafica1especificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafica1especificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
