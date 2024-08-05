import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnIngenieriaDeSoftwareComponent } from './maestria-en-ingenieria-de-software.component';

describe('MaestriaEnIngenieriaDeSoftwareComponent', () => {
  let component: MaestriaEnIngenieriaDeSoftwareComponent;
  let fixture: ComponentFixture<MaestriaEnIngenieriaDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnIngenieriaDeSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnIngenieriaDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
