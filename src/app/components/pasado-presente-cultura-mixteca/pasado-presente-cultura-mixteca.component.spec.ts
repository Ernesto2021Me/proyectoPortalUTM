import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadoPresenteCulturaMixtecaComponent } from './pasado-presente-cultura-mixteca.component';

describe('PasadoPresenteCulturaMixtecaComponent', () => {
  let component: PasadoPresenteCulturaMixtecaComponent;
  let fixture: ComponentFixture<PasadoPresenteCulturaMixtecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasadoPresenteCulturaMixtecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadoPresenteCulturaMixtecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
