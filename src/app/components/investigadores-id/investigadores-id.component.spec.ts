import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadoresIDComponent } from './investigadores-id.component';

describe('InvestigadoresIDComponent', () => {
  let component: InvestigadoresIDComponent;
  let fixture: ComponentFixture<InvestigadoresIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigadoresIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadoresIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
