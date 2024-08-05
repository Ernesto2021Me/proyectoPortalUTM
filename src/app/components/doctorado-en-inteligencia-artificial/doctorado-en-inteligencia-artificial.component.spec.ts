import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradoEnInteligenciaArtificialComponent } from './doctorado-en-inteligencia-artificial.component';

describe('DoctoradoEnInteligenciaArtificialComponent', () => {
  let component: DoctoradoEnInteligenciaArtificialComponent;
  let fixture: ComponentFixture<DoctoradoEnInteligenciaArtificialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoradoEnInteligenciaArtificialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoradoEnInteligenciaArtificialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
