import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuuSaviComponent } from './nuu-savi.component';

describe('NuuSaviComponent', () => {
  let component: NuuSaviComponent;
  let fixture: ComponentFixture<NuuSaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuuSaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuuSaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
