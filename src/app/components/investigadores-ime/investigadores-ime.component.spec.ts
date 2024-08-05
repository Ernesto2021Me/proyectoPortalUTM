import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresIMEComponent } from './investigadores-ime.component';

describe('InvestigadoresIMEComponent', () => {
  let component: InvestigadoresIMEComponent;
  let fixture: ComponentFixture<InvestigadoresIMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresIMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresIMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
