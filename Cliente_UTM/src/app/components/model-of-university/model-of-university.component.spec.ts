import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelOfUniversityComponent } from './model-of-university.component';

describe('ModelOfUniversityComponent', () => {
  let component: ModelOfUniversityComponent;
  let fixture: ComponentFixture<ModelOfUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelOfUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelOfUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
