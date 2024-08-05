import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraGeneralComponent } from './estructura-general.component';

describe('EstructuraGeneralComponent', () => {
  let component: EstructuraGeneralComponent;
  let fixture: ComponentFixture<EstructuraGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
