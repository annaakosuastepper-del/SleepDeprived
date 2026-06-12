import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Nav } from "../nav/nav";

@Component({
  selector: 'app-main',
  imports: [Nav, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  private router = inject(Router);

    teamMembers = [
    { name: 'Hari', image: 'personicon.jpg', route:'/profile/hari' },
    { name: 'Nina', image: 'personicon.jpg', route:'/profile/nina' },
    { name: 'Anna', image: 'personicon.jpg', route:'/profile/anna' },
    { name: 'Brenda', image: 'personicon.jpg', route:'/profile/brenda' }
  ];

  goToProfile(route: string) {
    this.router.navigate([route]);
  }

  goTo(){
    this.router.navigate(['/project-boardgame']);
  }

 

}
