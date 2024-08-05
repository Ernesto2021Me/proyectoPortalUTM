import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresIAComponent } from './investigadores-ia.component';

describe('InvestigadoresIAComponent', () => {
  let component: InvestigadoresIAComponent;
  let fixture: ComponentFixture<InvestigadoresIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresIAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
