import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoardgame } from './project-boardgame';

describe('ProjectBoardgame', () => {
  let component: ProjectBoardgame;
  let fixture: ComponentFixture<ProjectBoardgame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBoardgame],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectBoardgame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
