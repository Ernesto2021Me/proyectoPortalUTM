import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteligenciaArtificialMexicoComponent } from './inteligencia-artificial-mexico.component';

describe('InteligenciaArtificialMexicoComponent', () => {
  let component: InteligenciaArtificialMexicoComponent;
  let fixture: ComponentFixture<InteligenciaArtificialMexicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteligenciaArtificialMexicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteligenciaArtificialMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
