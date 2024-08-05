import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoresDeInstitutoComponent } from './directores-de-instituto.component';

describe('DirectoresDeInstitutoComponent', () => {
  let component: DirectoresDeInstitutoComponent;
  let fixture: ComponentFixture<DirectoresDeInstitutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoresDeInstitutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoresDeInstitutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
