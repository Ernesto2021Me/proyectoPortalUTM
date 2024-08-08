import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongresosYSeminariosComponent } from './congresos-y-seminarios.component';

describe('CongresosYSeminariosComponent', () => {
  let component: CongresosYSeminariosComponent;
  let fixture: ComponentFixture<CongresosYSeminariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongresosYSeminariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongresosYSeminariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
