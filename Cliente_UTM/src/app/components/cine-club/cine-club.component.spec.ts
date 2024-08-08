import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineClubComponent } from './cine-club.component';

describe('CineClubComponent', () => {
  let component: CineClubComponent;
  let fixture: ComponentFixture<CineClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CineClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
