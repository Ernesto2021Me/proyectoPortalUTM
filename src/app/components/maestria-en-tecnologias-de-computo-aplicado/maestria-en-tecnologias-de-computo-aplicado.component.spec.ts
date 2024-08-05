import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnTecnologiasDeComputoAplicadoComponent } from './maestria-en-tecnologias-de-computo-aplicado.component';

describe('MaestriaEnTecnologiasDeComputoAplicadoComponent', () => {
  let component: MaestriaEnTecnologiasDeComputoAplicadoComponent;
  let fixture: ComponentFixture<MaestriaEnTecnologiasDeComputoAplicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnTecnologiasDeComputoAplicadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnTecnologiasDeComputoAplicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
