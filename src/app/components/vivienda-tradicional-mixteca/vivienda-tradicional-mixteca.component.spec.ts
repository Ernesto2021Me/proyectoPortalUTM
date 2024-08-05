import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaTradicionalMixtecaComponent } from './vivienda-tradicional-mixteca.component';

describe('ViviendaTradicionalMixtecaComponent', () => {
  let component: ViviendaTradicionalMixtecaComponent;
  let fixture: ComponentFixture<ViviendaTradicionalMixtecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViviendaTradicionalMixtecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaTradicionalMixtecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
