import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaEnMecatronicaComponent } from './ingenieria-en-mecatronica.component';

describe('IngenieriaEnMecatronicaComponent', () => {
  let component: IngenieriaEnMecatronicaComponent;
  let fixture: ComponentFixture<IngenieriaEnMecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaEnMecatronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaEnMecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
