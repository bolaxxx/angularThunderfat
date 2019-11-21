import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlimentosComponent } from './list-alimentos.component';

describe('ListAlimentosComponent', () => {
  let component: ListAlimentosComponent;
  let fixture: ComponentFixture<ListAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
