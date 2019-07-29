import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandietaformComponent } from './plandietaform.component';

describe('PlandietaformComponent', () => {
  let component: PlandietaformComponent;
  let fixture: ComponentFixture<PlandietaformComponent>;

  beforeEach(async(() => {
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
