import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectoriaComponent } from './rectoria.component';

describe('RectoriaComponent', () => {
  let component: RectoriaComponent;
  let fixture: ComponentFixture<RectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
