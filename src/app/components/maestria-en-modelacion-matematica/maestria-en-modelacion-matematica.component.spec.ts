import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnModelacionMatematicaComponent } from './maestria-en-modelacion-matematica.component';

describe('MaestriaEnModelacionMatematicaComponent', () => {
  let component: MaestriaEnModelacionMatematicaComponent;
  let fixture: ComponentFixture<MaestriaEnModelacionMatematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnModelacionMatematicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnModelacionMatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
