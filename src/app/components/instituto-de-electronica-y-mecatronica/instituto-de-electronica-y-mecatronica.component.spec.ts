import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeElectronicaYMecatronicaComponent } from './instituto-de-electronica-y-mecatronica.component';

describe('InstitutoDeElectronicaYMecatronicaComponent', () => {
  let component: InstitutoDeElectronicaYMecatronicaComponent;
  let fixture: ComponentFixture<InstitutoDeElectronicaYMecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeElectronicaYMecatronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeElectronicaYMecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
