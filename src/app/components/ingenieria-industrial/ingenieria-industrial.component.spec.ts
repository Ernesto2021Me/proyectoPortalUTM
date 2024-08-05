import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaIndustrialComponent } from './ingenieria-industrial.component';

describe('IngenieriaIndustrialComponent', () => {
  let component: IngenieriaIndustrialComponent;
  let fixture: ComponentFixture<IngenieriaIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
