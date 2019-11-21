import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplatospredeterminadoComponent } from './listplatospredeterminado.component';

describe('ListplatospredeterminadoComponent', () => {
  let component: ListplatospredeterminadoComponent;
  let fixture: ComponentFixture<ListplatospredeterminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListplatospredeterminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplatospredeterminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
