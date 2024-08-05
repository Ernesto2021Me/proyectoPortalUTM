import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimposiumLinuxMixtecaComponent } from './simposium-linux-mixteca.component';

describe('SimposiumLinuxMixtecaComponent', () => {
  let component: SimposiumLinuxMixtecaComponent;
  let fixture: ComponentFixture<SimposiumLinuxMixtecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimposiumLinuxMixtecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimposiumLinuxMixtecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
