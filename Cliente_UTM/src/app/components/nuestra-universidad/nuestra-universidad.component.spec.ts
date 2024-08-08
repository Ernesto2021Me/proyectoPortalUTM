import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraUniversidadComponent } from './nuestra-universidad.component';

describe('NuestraUniversidadComponent', () => {
  let component: NuestraUniversidadComponent;
  let fixture: ComponentFixture<NuestraUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
