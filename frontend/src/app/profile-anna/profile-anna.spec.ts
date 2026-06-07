import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAnna } from './profile-anna';

describe('ProfileAnna', () => {
  let component: ProfileAnna;
  let fixture: ComponentFixture<ProfileAnna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileAnna],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileAnna);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
