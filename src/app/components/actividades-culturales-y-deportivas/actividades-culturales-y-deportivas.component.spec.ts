import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCulturalesYDeportivasComponent } from './actividades-culturales-y-deportivas.component';

describe('ActividadesCulturalesYDeportivasComponent', () => {
  let component: ActividadesCulturalesYDeportivasComponent;
  let fixture: ComponentFixture<ActividadesCulturalesYDeportivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadesCulturalesYDeportivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesCulturalesYDeportivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
