import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuajuapanLeonOaxacaComponent } from './huajuapan-leon-oaxaca.component';

describe('HuajuapanLeonOaxacaComponent', () => {
  let component: HuajuapanLeonOaxacaComponent;
  let fixture: ComponentFixture<HuajuapanLeonOaxacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuajuapanLeonOaxacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuajuapanLeonOaxacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
