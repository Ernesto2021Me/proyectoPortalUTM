import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaturaEnCienciasEmpresarialesComponent } from './licenciatura-en-ciencias-empresariales.component';

describe('LicenciaturaEnCienciasEmpresarialesComponent', () => {
  let component: LicenciaturaEnCienciasEmpresarialesComponent;
  let fixture: ComponentFixture<LicenciaturaEnCienciasEmpresarialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciaturaEnCienciasEmpresarialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenciaturaEnCienciasEmpresarialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
