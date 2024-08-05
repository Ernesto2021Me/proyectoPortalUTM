import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesInstitucionesPuebloDeMexicoComponent } from './personajes-instituciones-pueblo-de-mexico.component';

describe('PersonajesInstitucionesPuebloDeMexicoComponent', () => {
  let component: PersonajesInstitucionesPuebloDeMexicoComponent;
  let fixture: ComponentFixture<PersonajesInstitucionesPuebloDeMexicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesInstitucionesPuebloDeMexicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesInstitucionesPuebloDeMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
