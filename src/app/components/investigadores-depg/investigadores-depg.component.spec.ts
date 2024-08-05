import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresDEPGComponent } from './investigadores-depg.component';

describe('InvestigadoresDEPGComponent', () => {
  let component: InvestigadoresDEPGComponent;
  let fixture: ComponentFixture<InvestigadoresDEPGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresDEPGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresDEPGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
