import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaturaEnMatematicasAplicadasComponent } from './licenciatura-en-matematicas-aplicadas.component';

describe('LicenciaturaEnMatematicasAplicadasComponent', () => {
  let component: LicenciaturaEnMatematicasAplicadasComponent;
  let fixture: ComponentFixture<LicenciaturaEnMatematicasAplicadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciaturaEnMatematicasAplicadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenciaturaEnMatematicasAplicadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
