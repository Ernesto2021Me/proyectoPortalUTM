import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceRectoriaComponent } from './vice-rectoria.component';

describe('ViceRectoriaComponent', () => {
  let component: ViceRectoriaComponent;
  let fixture: ComponentFixture<ViceRectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViceRectoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViceRectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
