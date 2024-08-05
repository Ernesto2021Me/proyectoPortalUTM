import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanaDeLaCulturaMixtecaComponent } from './semana-de-la-cultura-mixteca.component';

describe('SemanaDeLaCulturaMixtecaComponent', () => {
  let component: SemanaDeLaCulturaMixtecaComponent;
  let fixture: ComponentFixture<SemanaDeLaCulturaMixtecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanaDeLaCulturaMixtecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaDeLaCulturaMixtecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
