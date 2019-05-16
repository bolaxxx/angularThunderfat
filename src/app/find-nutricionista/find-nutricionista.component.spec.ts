import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNutricionistaComponent } from './find-nutricionista.component';

describe('FindNutricionistaComponent', () => {
  let component: FindNutricionistaComponent;
  let fixture: ComponentFixture<FindNutricionistaComponent>;

  beforeEach(async(() => {
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
