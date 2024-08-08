import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaQuimicaComponent } from './ingenieria-quimica.component';

describe('IngenieriaQuimicaComponent', () => {
  let component: IngenieriaQuimicaComponent;
  let fixture: ComponentFixture<IngenieriaQuimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaQuimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaQuimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
