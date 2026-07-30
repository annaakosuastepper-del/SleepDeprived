import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})

export class Nav {
  constructor(private router: Router) {}


  navigateToProfile(name: string) {
    this.router.navigate(['/profile', name]);
  }


isScrolled = false;

@HostListener('window:scroll')
onScroll() {
  this.isScrolled = window.scrollY > 0;
}

  
}
