import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnMediosInteractivosComponent } from './maestria-en-medios-interactivos.component';

describe('MaestriaEnMediosInteractivosComponent', () => {
  let component: MaestriaEnMediosInteractivosComponent;
  let fixture: ComponentFixture<MaestriaEnMediosInteractivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnMediosInteractivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnMediosInteractivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
