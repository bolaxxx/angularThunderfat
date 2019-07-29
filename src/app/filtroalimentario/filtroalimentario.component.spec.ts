import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroalimentarioComponent } from './filtroalimentario.component';

describe('FiltroalimentarioComponent', () => {
  let component: FiltroalimentarioComponent;
  let fixture: ComponentFixture<FiltroalimentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroalimentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroalimentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
