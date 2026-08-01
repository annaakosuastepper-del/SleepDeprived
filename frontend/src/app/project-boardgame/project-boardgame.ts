import { Component } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project-boardgame',
  imports: [Nav, Footer],
  templateUrl: './project-boardgame.html',
  styleUrl: './project-boardgame.css',
})

export class ProjectBoardgame {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
    

  }
   img1X = 150; img1Y = 0;

  
}
