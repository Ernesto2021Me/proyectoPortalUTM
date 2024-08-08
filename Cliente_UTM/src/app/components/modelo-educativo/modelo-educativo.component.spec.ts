import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEducativoComponent } from './modelo-educativo.component';

describe('ModeloEducativoComponent', () => {
  let component: ModeloEducativoComponent;
  let fixture: ComponentFixture<ModeloEducativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloEducativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
