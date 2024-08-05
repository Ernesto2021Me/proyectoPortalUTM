import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearInternacionalDeLaPapaComponent } from './year-internacional-de-la-papa.component';

describe('YearInternacionalDeLaPapaComponent', () => {
  let component: YearInternacionalDeLaPapaComponent;
  let fixture: ComponentFixture<YearInternacionalDeLaPapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearInternacionalDeLaPapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearInternacionalDeLaPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
