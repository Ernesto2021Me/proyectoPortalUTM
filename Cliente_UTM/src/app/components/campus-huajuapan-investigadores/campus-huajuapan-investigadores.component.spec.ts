import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHuajuapanInvestigadoresComponent } from './campus-huajuapan-investigadores.component';

describe('CampusHuajuapanInvestigadoresComponent', () => {
  let component: CampusHuajuapanInvestigadoresComponent;
  let fixture: ComponentFixture<CampusHuajuapanInvestigadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusHuajuapanInvestigadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusHuajuapanInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
