import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnAdministracionDeNegociosComponent } from './maestria-en-administracion-de-negocios.component';

describe('MaestriaEnAdministracionDeNegociosComponent', () => {
  let component: MaestriaEnAdministracionDeNegociosComponent;
  let fixture: ComponentFixture<MaestriaEnAdministracionDeNegociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnAdministracionDeNegociosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnAdministracionDeNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
