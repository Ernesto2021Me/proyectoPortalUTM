import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElAguaComponent } from './el-agua.component';

describe('ElAguaComponent', () => {
  let component: ElAguaComponent;
  let fixture: ComponentFixture<ElAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
