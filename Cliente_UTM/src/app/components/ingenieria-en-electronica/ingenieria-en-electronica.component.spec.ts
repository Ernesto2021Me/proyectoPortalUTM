import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaEnElectronicaComponent } from './ingenieria-en-electronica.component';

describe('IngenieriaEnElectronicaComponent', () => {
  let component: IngenieriaEnElectronicaComponent;
  let fixture: ComponentFixture<IngenieriaEnElectronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaEnElectronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaEnElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
