import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradoEnElectronicaOpcionSistemasInteligentesComponent } from './doctorado-en-electronica-opcion-sistemas-inteligentes.component';

describe('DoctoradoEnElectronicaOpcionSistemasInteligentesComponent', () => {
  let component: DoctoradoEnElectronicaOpcionSistemasInteligentesComponent;
  let fixture: ComponentFixture<DoctoradoEnElectronicaOpcionSistemasInteligentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoradoEnElectronicaOpcionSistemasInteligentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoradoEnElectronicaOpcionSistemasInteligentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
