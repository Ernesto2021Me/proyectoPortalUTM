import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresPCCComponent } from './investigadores-pcc.component';

describe('InvestigadoresPCCComponent', () => {
  let component: InvestigadoresPCCComponent;
  let fixture: ComponentFixture<InvestigadoresPCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresPCCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresPCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
