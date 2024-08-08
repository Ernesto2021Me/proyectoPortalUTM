import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHuajuapanLicenciaturasComponent } from './campus-huajuapan-licenciaturas.component';

describe('CampusHuajuapanLicenciaturasComponent', () => {
  let component: CampusHuajuapanLicenciaturasComponent;
  let fixture: ComponentFixture<CampusHuajuapanLicenciaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusHuajuapanLicenciaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusHuajuapanLicenciaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
