import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnRoboticaComponent } from './maestria-en-robotica.component';

describe('MaestriaEnRoboticaComponent', () => {
  let component: MaestriaEnRoboticaComponent;
  let fixture: ComponentFixture<MaestriaEnRoboticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnRoboticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnRoboticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
