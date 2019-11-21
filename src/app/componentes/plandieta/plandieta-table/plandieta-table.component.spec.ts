import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandietaTableComponent } from './plandieta-table.component';

describe('PlandietaTableComponent', () => {
  let component: PlandietaTableComponent;
  let fixture: ComponentFixture<PlandietaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlandietaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlandietaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
