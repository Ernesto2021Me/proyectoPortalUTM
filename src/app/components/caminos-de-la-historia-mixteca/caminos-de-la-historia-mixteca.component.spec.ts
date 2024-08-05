import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminosDeLaHistoriaMixtecaComponent } from './caminos-de-la-historia-mixteca.component';

describe('CaminosDeLaHistoriaMixtecaComponent', () => {
  let component: CaminosDeLaHistoriaMixtecaComponent;
  let fixture: ComponentFixture<CaminosDeLaHistoriaMixtecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminosDeLaHistoriaMixtecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminosDeLaHistoriaMixtecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
