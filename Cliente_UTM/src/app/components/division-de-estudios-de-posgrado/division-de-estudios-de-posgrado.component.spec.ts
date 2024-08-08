import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionDeEstudiosDePosgradoComponent } from './division-de-estudios-de-posgrado.component';

describe('DivisionDeEstudiosDePosgradoComponent', () => {
  let component: DivisionDeEstudiosDePosgradoComponent;
  let fixture: ComponentFixture<DivisionDeEstudiosDePosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionDeEstudiosDePosgradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionDeEstudiosDePosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
