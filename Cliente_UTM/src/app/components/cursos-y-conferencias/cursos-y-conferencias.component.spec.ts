import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosYConferenciasComponent } from './cursos-y-conferencias.component';

describe('CursosYConferenciasComponent', () => {
  let component: CursosYConferenciasComponent;
  let fixture: ComponentFixture<CursosYConferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosYConferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosYConferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
