import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHari } from './profile-hari';

describe('ProfileHari', () => {
  let component: ProfileHari;
  let fixture: ComponentFixture<ProfileHari>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileHari],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHari);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
