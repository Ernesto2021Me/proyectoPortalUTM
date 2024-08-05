import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaicesMixtecasComponent } from './raices-mixtecas.component';

describe('RaicesMixtecasComponent', () => {
  let component: RaicesMixtecasComponent;
  let fixture: ComponentFixture<RaicesMixtecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaicesMixtecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaicesMixtecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
