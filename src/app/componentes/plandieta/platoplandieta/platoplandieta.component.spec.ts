import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoplandietaComponent } from './platoplandieta.component';

describe('PlatoplandietaComponent', () => {
  let component: PlatoplandietaComponent;
  let fixture: ComponentFixture<PlatoplandietaComponent>;

  beforeEach(async(() => {
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
