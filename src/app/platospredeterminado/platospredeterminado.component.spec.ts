import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatospredeterminadoComponent } from './platospredeterminado.component';

describe('PlatospredeterminadoComponent', () => {
  let component: PlatospredeterminadoComponent;
  let fixture: ComponentFixture<PlatospredeterminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatospredeterminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatospredeterminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
