import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListFiltroAlimentarioComponent } from './list-filtro-alimentario.component';

describe('ListFiltroAlimentarioComponent', () => {
  let component: ListFiltroAlimentarioComponent;
  let fixture: ComponentFixture<ListFiltroAlimentarioComponent>;

  beforeEach(waitForAsync(() => {
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
