import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicaYComputacionComponent } from './electronica-y-computacion.component';

describe('ElectronicaYComputacionComponent', () => {
  let component: ElectronicaYComputacionComponent;
  let fixture: ComponentFixture<ElectronicaYComputacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicaYComputacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicaYComputacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
