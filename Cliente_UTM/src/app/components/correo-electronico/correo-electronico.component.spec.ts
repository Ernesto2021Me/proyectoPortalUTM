import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoElectronicoComponent } from './correo-electronico.component';

describe('CorreoElectronicoComponent', () => {
  let component: CorreoElectronicoComponent;
  let fixture: ComponentFixture<CorreoElectronicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoElectronicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoElectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
