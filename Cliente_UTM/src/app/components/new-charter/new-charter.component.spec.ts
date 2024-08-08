import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharterComponent } from './new-charter.component';

describe('NewCharterComponent', () => {
  let component: NewCharterComponent;
  let fixture: ComponentFixture<NewCharterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCharterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
