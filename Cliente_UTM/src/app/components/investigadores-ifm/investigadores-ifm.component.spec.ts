import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresIFMComponent } from './investigadores-ifm.component';

describe('InvestigadoresIFMComponent', () => {
  let component: InvestigadoresIFMComponent;
  let fixture: ComponentFixture<InvestigadoresIFMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresIFMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresIFMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
