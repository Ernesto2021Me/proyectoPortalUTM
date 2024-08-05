import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaEnDisenoComponent } from './ingenieria-en-diseno.component';

describe('IngenieriaEnDisenoComponent', () => {
  let component: IngenieriaEnDisenoComponent;
  let fixture: ComponentFixture<IngenieriaEnDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaEnDisenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaEnDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
