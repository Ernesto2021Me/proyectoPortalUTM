import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresICComponent } from './investigadores-ic.component';

describe('InvestigadoresICComponent', () => {
  let component: InvestigadoresICComponent;
  let fixture: ComponentFixture<InvestigadoresICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresICComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
