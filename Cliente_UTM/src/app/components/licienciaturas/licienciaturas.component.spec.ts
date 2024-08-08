import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicienciaturasComponent } from './licienciaturas.component';

describe('LicienciaturasComponent', () => {
  let component: LicienciaturasComponent;
  let fixture: ComponentFixture<LicienciaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicienciaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicienciaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
