import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutosDeInvestigacionComponent } from './institutos-de-investigacion.component';

describe('InstitutosDeInvestigacionComponent', () => {
  let component: InstitutosDeInvestigacionComponent;
  let fixture: ComponentFixture<InstitutosDeInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutosDeInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutosDeInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
