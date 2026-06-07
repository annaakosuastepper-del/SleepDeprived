import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private router = inject(Router);

  goBack(){
    this.router.navigate(['']);
  }

  goToMain(){
    this.router.navigate(['/main']);
  }

}
