import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnDisenoDeModasComponent } from './maestria-en-diseno-de-modas.component';

describe('MaestriaEnDisenoDeModasComponent', () => {
  let component: MaestriaEnDisenoDeModasComponent;
  let fixture: ComponentFixture<MaestriaEnDisenoDeModasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnDisenoDeModasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnDisenoDeModasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
