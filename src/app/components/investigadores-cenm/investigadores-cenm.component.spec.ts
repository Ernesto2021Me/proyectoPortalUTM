import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresCENMComponent } from './investigadores-cenm.component';

describe('InvestigadoresCENMComponent', () => {
  let component: InvestigadoresCENMComponent;
  let fixture: ComponentFixture<InvestigadoresCENMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresCENMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresCENMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
