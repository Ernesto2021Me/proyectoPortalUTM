import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroActividadesCulturalesComponent } from './centro-actividades-culturales.component';

describe('CentroActividadesCulturalesComponent', () => {
  let component: CentroActividadesCulturalesComponent;
  let fixture: ComponentFixture<CentroActividadesCulturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroActividadesCulturalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroActividadesCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
