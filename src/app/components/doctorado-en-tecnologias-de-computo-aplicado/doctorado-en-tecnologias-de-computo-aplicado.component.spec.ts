import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradoEnTecnologiasDeComputoAplicadoComponent } from './doctorado-en-tecnologias-de-computo-aplicado.component';

describe('DoctoradoEnTecnologiasDeComputoAplicadoComponent', () => {
  let component: DoctoradoEnTecnologiasDeComputoAplicadoComponent;
  let fixture: ComponentFixture<DoctoradoEnTecnologiasDeComputoAplicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoradoEnTecnologiasDeComputoAplicadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoradoEnTecnologiasDeComputoAplicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
