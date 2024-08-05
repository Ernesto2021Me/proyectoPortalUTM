import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnCienciasDeMaterialesComponent } from './maestria-en-ciencias-de-materiales.component';

describe('MaestriaEnCienciasDeMaterialesComponent', () => {
  let component: MaestriaEnCienciasDeMaterialesComponent;
  let fixture: ComponentFixture<MaestriaEnCienciasDeMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnCienciasDeMaterialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnCienciasDeMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
