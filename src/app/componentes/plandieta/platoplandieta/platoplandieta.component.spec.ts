import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlatoplandietaComponent } from './platoplandieta.component';

describe('PlatoplandietaComponent', () => {
  let component: PlatoplandietaComponent;
  let fixture: ComponentFixture<PlatoplandietaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoplandietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoplandietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
