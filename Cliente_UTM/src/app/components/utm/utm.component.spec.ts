import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UTMComponent } from './utm.component';

describe('UTMComponent', () => {
  let component: UTMComponent;
  let fixture: ComponentFixture<UTMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UTMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
