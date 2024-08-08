import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenciasCulturaMixtecaComponent } from './presencias-cultura-mixteca.component';

describe('PresenciasCulturaMixtecaComponent', () => {
  let component: PresenciasCulturaMixtecaComponent;
  let fixture: ComponentFixture<PresenciasCulturaMixtecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenciasCulturaMixtecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenciasCulturaMixtecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
