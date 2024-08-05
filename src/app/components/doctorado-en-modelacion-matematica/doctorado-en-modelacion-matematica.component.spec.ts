import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradoEnModelacionMatematicaComponent } from './doctorado-en-modelacion-matematica.component';

describe('DoctoradoEnModelacionMatematicaComponent', () => {
  let component: DoctoradoEnModelacionMatematicaComponent;
  let fixture: ComponentFixture<DoctoradoEnModelacionMatematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoradoEnModelacionMatematicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoradoEnModelacionMatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
