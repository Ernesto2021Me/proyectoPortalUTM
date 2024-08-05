import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHuajuapanInstitutosComponent } from './campus-huajuapan-institutos.component';

describe('CampusHuajuapanInstitutosComponent', () => {
  let component: CampusHuajuapanInstitutosComponent;
  let fixture: ComponentFixture<CampusHuajuapanInstitutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusHuajuapanInstitutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusHuajuapanInstitutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
