import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEnDisenoDeMueblesComponent } from './maestria-en-diseno-de-muebles.component';

describe('MaestriaEnDisenoDeMueblesComponent', () => {
  let component: MaestriaEnDisenoDeMueblesComponent;
  let fixture: ComponentFixture<MaestriaEnDisenoDeMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestriaEnDisenoDeMueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEnDisenoDeMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
