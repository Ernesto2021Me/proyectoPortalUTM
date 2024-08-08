import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoModeloUniversidadComponent } from './nuevo-modelo-universidad.component';

describe('NuevoModeloUniversidadComponent', () => {
  let component: NuevoModeloUniversidadComponent;
  let fixture: ComponentFixture<NuevoModeloUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoModeloUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoModeloUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
