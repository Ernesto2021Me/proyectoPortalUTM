import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeEstudiosDeNuevosMaterialesComponent } from './centro-de-estudios-de-nuevos-materiales.component';

describe('CentroDeEstudiosDeNuevosMaterialesComponent', () => {
  let component: CentroDeEstudiosDeNuevosMaterialesComponent;
  let fixture: ComponentFixture<CentroDeEstudiosDeNuevosMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroDeEstudiosDeNuevosMaterialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroDeEstudiosDeNuevosMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
