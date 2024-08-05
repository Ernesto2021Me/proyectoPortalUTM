import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraSolLunaComponent } from './tierra-sol-luna.component';

describe('TierraSolLunaComponent', () => {
  let component: TierraSolLunaComponent;
  let fixture: ComponentFixture<TierraSolLunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierraSolLunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierraSolLunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
