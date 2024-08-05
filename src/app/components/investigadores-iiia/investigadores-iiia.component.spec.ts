import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresIIIAComponent } from './investigadores-iiia.component';

describe('InvestigadoresIIIAComponent', () => {
  let component: InvestigadoresIIIAComponent;
  let fixture: ComponentFixture<InvestigadoresIIIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresIIIAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresIIIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
