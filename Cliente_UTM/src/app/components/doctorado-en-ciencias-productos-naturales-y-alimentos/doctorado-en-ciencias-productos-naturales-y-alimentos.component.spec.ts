import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradoEnCienciasProductosNaturalesYAlimentosComponent } from './doctorado-en-ciencias-productos-naturales-y-alimentos.component';

describe('DoctoradoEnCienciasProductosNaturalesYAlimentosComponent', () => {
  let component: DoctoradoEnCienciasProductosNaturalesYAlimentosComponent;
  let fixture: ComponentFixture<DoctoradoEnCienciasProductosNaturalesYAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoradoEnCienciasProductosNaturalesYAlimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoradoEnCienciasProductosNaturalesYAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
