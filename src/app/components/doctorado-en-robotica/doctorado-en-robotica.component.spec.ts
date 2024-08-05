import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradoEnRoboticaComponent } from './doctorado-en-robotica.component';

describe('DoctoradoEnRoboticaComponent', () => {
  let component: DoctoradoEnRoboticaComponent;
  let fixture: ComponentFixture<DoctoradoEnRoboticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoradoEnRoboticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoradoEnRoboticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
