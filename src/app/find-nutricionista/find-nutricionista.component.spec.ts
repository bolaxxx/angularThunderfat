import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FindNutricionistaComponent } from './find-nutricionista.component';

describe('FindNutricionistaComponent', () => {
  let component: FindNutricionistaComponent;
  let fixture: ComponentFixture<FindNutricionistaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FindNutricionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
