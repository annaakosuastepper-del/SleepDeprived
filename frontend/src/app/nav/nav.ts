import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})

export class Nav {
  constructor(private router: Router) {}


  navigateToProfile(name: string) {
    this.router.navigate(['/profile', name]);
  }
  
}
