import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeAgroindustriasComponent } from './instituto-de-agroindustrias.component';

describe('InstitutoDeAgroindustriasComponent', () => {
  let component: InstitutoDeAgroindustriasComponent;
  let fixture: ComponentFixture<InstitutoDeAgroindustriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeAgroindustriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeAgroindustriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
