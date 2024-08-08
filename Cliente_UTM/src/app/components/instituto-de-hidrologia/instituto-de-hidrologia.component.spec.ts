import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeHidrologiaComponent } from './instituto-de-hidrologia.component';

describe('InstitutoDeHidrologiaComponent', () => {
  let component: InstitutoDeHidrologiaComponent;
  let fixture: ComponentFixture<InstitutoDeHidrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeHidrologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeHidrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
