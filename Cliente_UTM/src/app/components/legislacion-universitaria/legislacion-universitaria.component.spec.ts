import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislacionUniversitariaComponent } from './legislacion-universitaria.component';

describe('LegislacionUniversitariaComponent', () => {
  let component: LegislacionUniversitariaComponent;
  let fixture: ComponentFixture<LegislacionUniversitariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegislacionUniversitariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislacionUniversitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
