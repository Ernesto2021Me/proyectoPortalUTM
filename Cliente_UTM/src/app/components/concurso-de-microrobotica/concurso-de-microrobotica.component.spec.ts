import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoDeMicroroboticaComponent } from './concurso-de-microrobotica.component';

describe('ConcursoDeMicroroboticaComponent', () => {
  let component: ConcursoDeMicroroboticaComponent;
  let fixture: ComponentFixture<ConcursoDeMicroroboticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcursoDeMicroroboticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoDeMicroroboticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
