import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnInteligenciaArtificialComponent } from './maestria-en-inteligencia-artificial.component';

describe('MaestriaEnInteligenciaArtificialComponent', () => {
  let component: MaestriaEnInteligenciaArtificialComponent;
  let fixture: ComponentFixture<MaestriaEnInteligenciaArtificialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnInteligenciaArtificialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnInteligenciaArtificialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
