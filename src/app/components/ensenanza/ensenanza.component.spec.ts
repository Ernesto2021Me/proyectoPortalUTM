import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsenanzaComponent } from './ensenanza.component';

describe('EnsenanzaComponent', () => {
  let component: EnsenanzaComponent;
  let fixture: ComponentFixture<EnsenanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsenanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsenanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
