import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosRecreativosComponent } from './eventos-recreativos.component';

describe('EventosRecreativosComponent', () => {
  let component: EventosRecreativosComponent;
  let fixture: ComponentFixture<EventosRecreativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosRecreativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosRecreativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
