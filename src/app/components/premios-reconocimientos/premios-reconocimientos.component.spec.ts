import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiosReconocimientosComponent } from './premios-reconocimientos.component';

describe('PremiosReconocimientosComponent', () => {
  let component: PremiosReconocimientosComponent;
  let fixture: ComponentFixture<PremiosReconocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiosReconocimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiosReconocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
