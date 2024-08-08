import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosConferenciasComponent } from './cursos-conferencias.component';

describe('CursosConferenciasComponent', () => {
  let component: CursosConferenciasComponent;
  let fixture: ComponentFixture<CursosConferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosConferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosConferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
