import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresCPDComponent } from './investigadores-cpd.component';

describe('InvestigadoresCPDComponent', () => {
  let component: InvestigadoresCPDComponent;
  let fixture: ComponentFixture<InvestigadoresCPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresCPDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresCPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
