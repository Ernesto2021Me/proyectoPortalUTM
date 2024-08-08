import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoAPosgradoComponent } from './ingreso-a-posgrado.component';

describe('IngresoAPosgradoComponent', () => {
  let component: IngresoAPosgradoComponent;
  let fixture: ComponentFixture<IngresoAPosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoAPosgradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoAPosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
