import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBrenda } from './profile-brenda';

describe('ProfileBrenda', () => {
  let component: ProfileBrenda;
  let fixture: ComponentFixture<ProfileBrenda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBrenda],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileBrenda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
