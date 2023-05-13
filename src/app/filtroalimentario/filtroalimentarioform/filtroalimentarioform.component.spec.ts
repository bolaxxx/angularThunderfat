import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiltroalimentarioformComponent } from './filtroalimentarioform.component';

describe('FiltroalimentarioformComponent', () => {
  let component: FiltroalimentarioformComponent;
  let fixture: ComponentFixture<FiltroalimentarioformComponent>;

  beforeEach(waitForAsync(() => {
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
