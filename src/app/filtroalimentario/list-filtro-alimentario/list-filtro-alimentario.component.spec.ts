import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiltroAlimentarioComponent } from './list-filtro-alimentario.component';

describe('ListFiltroAlimentarioComponent', () => {
  let component: ListFiltroAlimentarioComponent;
  let fixture: ComponentFixture<ListFiltroAlimentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFiltroAlimentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFiltroAlimentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
