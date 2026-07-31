import { Component } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-project-boardgame',
  imports: [Nav, Footer],
  templateUrl: './project-boardgame.html',
  styleUrl: './project-boardgame.css',
})
export class ProjectBoardgame {}
