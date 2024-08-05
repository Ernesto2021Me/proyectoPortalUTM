import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaEnComputacionComponent } from './ingenieria-en-computacion.component';

describe('IngenieriaEnComputacionComponent', () => {
  let component: IngenieriaEnComputacionComponent;
  let fixture: ComponentFixture<IngenieriaEnComputacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaEnComputacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaEnComputacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
