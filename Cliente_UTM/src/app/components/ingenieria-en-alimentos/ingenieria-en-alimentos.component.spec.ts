import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaEnAlimentosComponent } from './ingenieria-en-alimentos.component';

describe('IngenieriaEnAlimentosComponent', () => {
  let component: IngenieriaEnAlimentosComponent;
  let fixture: ComponentFixture<IngenieriaEnAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaEnAlimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaEnAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
