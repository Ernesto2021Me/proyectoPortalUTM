import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresIHComponent } from './investigadores-ih.component';

describe('InvestigadoresIHComponent', () => {
  let component: InvestigadoresIHComponent;
  let fixture: ComponentFixture<InvestigadoresIHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresIHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresIHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
