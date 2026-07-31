import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  role = '';

  private router = inject(Router);

  goBack(){
    this.router.navigate(['']);
  }

  goToMain(){
    this.router.navigate(['/main']);
  }

  errorMessage = '';
  

  async login(){

    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({username: this.username, password: this.password})
    });

    if(response.ok){
      console.log('success')
      const data = await response.json();
      console.log('login response:', data);
      const token = data.token;
      localStorage.setItem('token', token);
            localStorage.setItem('role', data.user.role);

      this.router.navigate(['/main']);

    }
    else{
      console.log('wrong credentials')
      this.errorMessage = 'Wrong username or password';
    }

      
    }

    mouseX = 0;
    mouseY = 0;
    img1X = 0; img1Y = 0;
    img2X = 0; img2Y = 0;

    @HostListener('mousemove', ['$event'])
  
    onMouseMove(event: MouseEvent) {
   this.mouseX = event.clientX;
  this.mouseY = event.clientY;

  // img2
  const img1CenterX = window.innerWidth * 0.1;
  const img1CenterY = window.innerHeight * 0.5;

  const dist1 = Math.sqrt(
    Math.pow(this.mouseX - img1CenterX, 2) +
    Math.pow(this.mouseY - img1CenterY, 2)
  );

  if (dist1 < 500) {
    this.img1X = (this.mouseX - img1CenterX) * 0.3;
    this.img1Y = (this.mouseY - img1CenterY) * 0.3;
  } else {
    this.img1X = 0;
    this.img1Y = 0;
  }

   // img2
  const img2CenterX = window.innerWidth * 0.1;
  const img2CenterY = window.innerHeight * 0.5;

  const dist2 = Math.sqrt(
    Math.pow(this.mouseX - img1CenterX, 2) +
    Math.pow(this.mouseY - img1CenterY, 2)
  );

  if (dist1 < 500) {
    this.img2X = (this.mouseX - img1CenterX) * 0.3;
    this.img2Y = (this.mouseY - img1CenterY) * 0.3;
  } else {
    this.img2X = 0;
    this.img2Y = 0;
  }






 




}

}


