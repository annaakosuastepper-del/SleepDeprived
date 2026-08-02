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
    { name: 'Hari', image: '/assets/hariPixel.PNG', route:'/profile/hari' },
    { name: 'Nina', image: '/assets/ninaPixel.PNG', route:'/profile/nina' },
    { name: 'Anna', image: '/assets/annaPixel.PNG', route:'/profile/anna' },
    { name: 'Brenda', image: '/assets/brendaPixel.PNG', route:'/profile/brenda' }
  ];

  goToProfile(route: string) {
    this.router.navigate([route]);
  }

  goTo(){
    this.router.navigate(['/project-boardgame']);
  }
imgX = 100; imgY = 10;

img1X = 1200; img1Y = 0;

img2X = 80 ; img2Y = 1000;


}
