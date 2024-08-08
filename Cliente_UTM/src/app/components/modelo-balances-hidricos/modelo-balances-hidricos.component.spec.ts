import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloBalancesHidricosComponent } from './modelo-balances-hidricos.component';

describe('ModeloBalancesHidricosComponent', () => {
  let component: ModeloBalancesHidricosComponent;
  let fixture: ComponentFixture<ModeloBalancesHidricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloBalancesHidricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloBalancesHidricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
