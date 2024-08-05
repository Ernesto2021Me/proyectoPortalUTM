import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeIngenieriaIndustrialYAutomotrizComponent } from './instituto-de-ingenieria-industrial-y-automotriz.component';

describe('InstitutoDeIngenieriaIndustrialYAutomotrizComponent', () => {
  let component: InstitutoDeIngenieriaIndustrialYAutomotrizComponent;
  let fixture: ComponentFixture<InstitutoDeIngenieriaIndustrialYAutomotrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeIngenieriaIndustrialYAutomotrizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeIngenieriaIndustrialYAutomotrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
