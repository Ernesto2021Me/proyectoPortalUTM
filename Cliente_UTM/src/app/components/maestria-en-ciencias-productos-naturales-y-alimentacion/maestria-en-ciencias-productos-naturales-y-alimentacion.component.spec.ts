import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnCienciasProductosNaturalesYAlimentacionComponent } from './maestria-en-ciencias-productos-naturales-y-alimentacion.component';

describe('MaestriaEnCienciasProductosNaturalesYAlimentacionComponent', () => {
  let component: MaestriaEnCienciasProductosNaturalesYAlimentacionComponent;
  let fixture: ComponentFixture<MaestriaEnCienciasProductosNaturalesYAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnCienciasProductosNaturalesYAlimentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnCienciasProductosNaturalesYAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
