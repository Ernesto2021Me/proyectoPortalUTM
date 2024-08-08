import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresInvestigadoresComponent } from './profesores-investigadores.component';

describe('ProfesoresInvestigadoresComponent', () => {
  let component: ProfesoresInvestigadoresComponent;
  let fixture: ComponentFixture<ProfesoresInvestigadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresInvestigadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
