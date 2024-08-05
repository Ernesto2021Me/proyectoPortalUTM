import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeComputacionComponent } from './instituto-de-computacion.component';

describe('InstitutoDeComputacionComponent', () => {
  let component: InstitutoDeComputacionComponent;
  let fixture: ComponentFixture<InstitutoDeComputacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeComputacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeComputacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
