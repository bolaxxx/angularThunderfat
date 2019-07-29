import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroalimentarioformComponent } from './filtroalimentarioform.component';

describe('FiltroalimentarioformComponent', () => {
  let component: FiltroalimentarioformComponent;
  let fixture: ComponentFixture<FiltroalimentarioformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroalimentarioformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroalimentarioformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
