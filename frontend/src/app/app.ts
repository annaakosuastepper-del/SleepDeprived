import { Component, inject } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private router = inject(Router);

  goToLogin(){
    this.router.navigate(["/login"])
  }
}
