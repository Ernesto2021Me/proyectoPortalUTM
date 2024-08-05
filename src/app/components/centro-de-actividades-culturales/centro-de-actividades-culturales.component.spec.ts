import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeActividadesCulturalesComponent } from './centro-de-actividades-culturales.component';

describe('CentroDeActividadesCulturalesComponent', () => {
  let component: CentroDeActividadesCulturalesComponent;
  let fixture: ComponentFixture<CentroDeActividadesCulturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroDeActividadesCulturalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroDeActividadesCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
