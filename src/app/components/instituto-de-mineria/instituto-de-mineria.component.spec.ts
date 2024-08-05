import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoDeMineriaComponent } from './instituto-de-mineria.component';

describe('InstitutoDeMineriaComponent', () => {
  let component: InstitutoDeMineriaComponent;
  let fixture: ComponentFixture<InstitutoDeMineriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutoDeMineriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoDeMineriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
