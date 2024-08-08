import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaEnFisicaAplicadaComponent } from './ingenieria-en-fisica-aplicada.component';

describe('IngenieriaEnFisicaAplicadaComponent', () => {
  let component: IngenieriaEnFisicaAplicadaComponent;
  let fixture: ComponentFixture<IngenieriaEnFisicaAplicadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaEnFisicaAplicadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaEnFisicaAplicadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
