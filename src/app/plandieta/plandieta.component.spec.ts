import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlandietaComponent } from './plandieta.component';

describe('PlandietaComponent', () => {
  let component: PlandietaComponent;
  let fixture: ComponentFixture<PlandietaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlandietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlandietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
