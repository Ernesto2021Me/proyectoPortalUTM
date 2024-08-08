import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeDisenoComponent } from './instituto-de-diseno.component';

describe('InstitutoDeDisenoComponent', () => {
  let component: InstitutoDeDisenoComponent;
  let fixture: ComponentFixture<InstitutoDeDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeDisenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
