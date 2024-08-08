import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignificadoDeLosSuenosComponent } from './significado-de-los-suenos.component';

describe('SignificadoDeLosSuenosComponent', () => {
  let component: SignificadoDeLosSuenosComponent;
  let fixture: ComponentFixture<SignificadoDeLosSuenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignificadoDeLosSuenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignificadoDeLosSuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
