import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHuajuapanPosgradosComponent } from './campus-huajuapan-posgrados.component';

describe('CampusHuajuapanPosgradosComponent', () => {
  let component: CampusHuajuapanPosgradosComponent;
  let fixture: ComponentFixture<CampusHuajuapanPosgradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusHuajuapanPosgradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusHuajuapanPosgradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
