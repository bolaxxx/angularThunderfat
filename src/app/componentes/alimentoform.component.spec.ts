import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlimentoformComponent } from './alimentoform.component';

describe('AlimentoformComponent', () => {
  let component: AlimentoformComponent;
  let fixture: ComponentFixture<AlimentoformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
