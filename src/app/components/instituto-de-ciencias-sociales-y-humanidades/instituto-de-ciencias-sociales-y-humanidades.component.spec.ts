import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeCienciasSocialesYHumanidadesComponent } from './instituto-de-ciencias-sociales-y-humanidades.component';

describe('InstitutoDeCienciasSocialesYHumanidadesComponent', () => {
  let component: InstitutoDeCienciasSocialesYHumanidadesComponent;
  let fixture: ComponentFixture<InstitutoDeCienciasSocialesYHumanidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeCienciasSocialesYHumanidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeCienciasSocialesYHumanidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
