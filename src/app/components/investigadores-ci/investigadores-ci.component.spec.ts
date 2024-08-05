import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresCIComponent } from './investigadores-ci.component';

describe('InvestigadoresCIComponent', () => {
  let component: InvestigadoresCIComponent;
  let fixture: ComponentFixture<InvestigadoresCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresCIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
