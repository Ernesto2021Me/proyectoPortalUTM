import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaMecanicaAutomotrizComponent } from './ingenieria-mecanica-automotriz.component';

describe('IngenieriaMecanicaAutomotrizComponent', () => {
  let component: IngenieriaMecanicaAutomotrizComponent;
  let fixture: ComponentFixture<IngenieriaMecanicaAutomotrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaMecanicaAutomotrizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaMecanicaAutomotrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
