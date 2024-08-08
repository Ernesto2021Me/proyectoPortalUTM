import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeFisicaMatematicasComponent } from './instituto-de-fisica-matematicas.component';

describe('InstitutoDeFisicaMatematicasComponent', () => {
  let component: InstitutoDeFisicaMatematicasComponent;
  let fixture: ComponentFixture<InstitutoDeFisicaMatematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeFisicaMatematicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeFisicaMatematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
