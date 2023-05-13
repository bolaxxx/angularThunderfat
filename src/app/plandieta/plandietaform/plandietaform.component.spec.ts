import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlandietaformComponent } from './plandietaform.component';

describe('PlandietaformComponent', () => {
  let component: PlandietaformComponent;
  let fixture: ComponentFixture<PlandietaformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlandietaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlandietaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
