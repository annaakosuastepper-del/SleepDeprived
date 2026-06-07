import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNina } from './profile-nina';

describe('ProfileNina', () => {
  let component: ProfileNina;
  let fixture: ComponentFixture<ProfileNina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileNina],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileNina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
