import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MedicionespecificaformComponent } from './medicionespecificaform.component';

describe('MedicionespecificaformComponent', () => {
  let component: MedicionespecificaformComponent;
  let fixture: ComponentFixture<MedicionespecificaformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicionespecificaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicionespecificaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
