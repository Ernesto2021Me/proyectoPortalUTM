import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresICSHComponent } from './investigadores-icsh.component';

describe('InvestigadoresICSHComponent', () => {
  let component: InvestigadoresICSHComponent;
  let fixture: ComponentFixture<InvestigadoresICSHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresICSHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresICSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
