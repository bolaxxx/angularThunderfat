import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiadietaComponent } from './diadieta.component';

describe('DiadietaComponent', () => {
  let component: DiadietaComponent;
  let fixture: ComponentFixture<DiadietaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiadietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiadietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
