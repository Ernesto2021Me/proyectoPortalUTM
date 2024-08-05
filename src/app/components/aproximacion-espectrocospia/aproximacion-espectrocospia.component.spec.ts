import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproximacionEspectrocospiaComponent } from './aproximacion-espectrocospia.component';

describe('AproximacionEspectrocospiaComponent', () => {
  let component: AproximacionEspectrocospiaComponent;
  let fixture: ComponentFixture<AproximacionEspectrocospiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproximacionEspectrocospiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproximacionEspectrocospiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
