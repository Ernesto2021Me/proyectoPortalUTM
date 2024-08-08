import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnElectronicaOpcionSistemasInteligentesComponent } from './maestria-en-electronica-opcion-sistemas-inteligentes.component';

describe('MaestriaEnElectronicaOpcionSistemasInteligentesComponent', () => {
  let component: MaestriaEnElectronicaOpcionSistemasInteligentesComponent;
  let fixture: ComponentFixture<MaestriaEnElectronicaOpcionSistemasInteligentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnElectronicaOpcionSistemasInteligentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnElectronicaOpcionSistemasInteligentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
