import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresIMComponent } from './investigadores-im.component';

describe('InvestigadoresIMComponent', () => {
  let component: InvestigadoresIMComponent;
  let fixture: ComponentFixture<InvestigadoresIMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresIMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
