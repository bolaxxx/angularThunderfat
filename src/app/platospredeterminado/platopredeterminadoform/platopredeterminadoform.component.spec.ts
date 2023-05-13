import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlatopredeterminadoformComponent } from './platopredeterminadoform.component';

describe('PlatopredeterminadoformComponent', () => {
  let component: PlatopredeterminadoformComponent;
  let fixture: ComponentFixture<PlatopredeterminadoformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatopredeterminadoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatopredeterminadoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
