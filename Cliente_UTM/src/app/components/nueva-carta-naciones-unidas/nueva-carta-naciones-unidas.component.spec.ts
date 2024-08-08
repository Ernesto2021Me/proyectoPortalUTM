import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCartaNacionesUnidasComponent } from './nueva-carta-naciones-unidas.component';

describe('NuevaCartaNacionesUnidasComponent', () => {
  let component: NuevaCartaNacionesUnidasComponent;
  let fixture: ComponentFixture<NuevaCartaNacionesUnidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaCartaNacionesUnidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCartaNacionesUnidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
