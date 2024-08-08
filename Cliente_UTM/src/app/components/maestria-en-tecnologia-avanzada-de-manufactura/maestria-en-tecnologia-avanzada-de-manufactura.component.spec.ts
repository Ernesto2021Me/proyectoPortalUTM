import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnTecnologiaAvanzadaDeManufacturaComponent } from './maestria-en-tecnologia-avanzada-de-manufactura.component';

describe('MaestriaEnTecnologiaAvanzadaDeManufacturaComponent', () => {
  let component: MaestriaEnTecnologiaAvanzadaDeManufacturaComponent;
  let fixture: ComponentFixture<MaestriaEnTecnologiaAvanzadaDeManufacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnTecnologiaAvanzadaDeManufacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnTecnologiaAvanzadaDeManufacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
