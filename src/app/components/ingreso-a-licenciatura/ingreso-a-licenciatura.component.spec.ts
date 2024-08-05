import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoALicenciaturaComponent } from './ingreso-a-licenciatura.component';

describe('IngresoALicenciaturaComponent', () => {
  let component: IngresoALicenciaturaComponent;
  let fixture: ComponentFixture<IngresoALicenciaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoALicenciaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoALicenciaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
