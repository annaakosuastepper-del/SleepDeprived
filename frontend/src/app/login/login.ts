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
    img3X = 0; img3Y = 0;
    img4X = 0; img4Y = 0;
    img5X = 0; img5Y = 0;
    img6X = 0; img6Y = 0;
    img7X = 0; img7Y = 0;
    img8X = 0; img8Y = 0;
    img9X = 0; img9Y = 0;



    @HostListener('mousemove', ['$event'])
  
    onMouseMove(event: MouseEvent) {
   this.mouseX = event.clientX;
  this.mouseY = event.clientY;

  // img1
  const img1CenterX = window.innerWidth * 0.15;
  const img1CenterY = window.innerHeight * 0.5;

  const dist1 = Math.sqrt(
    Math.pow(this.mouseX - img1CenterX, 2) +
    Math.pow(this.mouseY - img1CenterY, 2)
  );

  if (dist1 < 250) {
    this.img1X = (this.mouseX - img1CenterX) * 0.5;
    this.img1Y = (this.mouseY - img1CenterY) * 0.1;
  } else {
    this.img1X = 0;
    this.img1Y = 0;
  }

   // img2
  const img2CenterX = window.innerWidth * 0.85;
  const img2CenterY = window.innerHeight * 0.25;

  const dist2 = Math.sqrt(
    Math.pow(this.mouseX - img2CenterX, 2) +
    Math.pow(this.mouseY - img2CenterY, 2)
  );

  if (dist2 < 250) {
    this.img2X = (this.mouseX - img2CenterX) * 0.3;
    this.img2Y = (this.mouseY - img2CenterY) * 0.3;
  } else {
    this.img2X = 0;
    this.img2Y = 0;
  }

  // img3
  const img3CenterX = window.innerWidth * 0.3;
  const img3CenterY = window.innerHeight * 1.0;

  const dist3 = Math.sqrt(
    Math.pow(this.mouseX - img3CenterX, 2) +
    Math.pow(this.mouseY - img3CenterY, 2)
  );

  if (dist3 < 250) {
    this.img3X = (this.mouseX - img3CenterX) * 0.3;
    this.img3Y = (this.mouseY - img3CenterY) * 0.3;
  } else {
    this.img3X = 0;
    this.img3Y = 0;
  }

  // img4
  const img4CenterX = window.innerWidth * 0.7;
  const img4CenterY = window.innerHeight * 0.1;

  const dist4 = Math.sqrt(
    Math.pow(this.mouseX - img4CenterX, 2) +
    Math.pow(this.mouseY - img4CenterY, 2)
  );

  if (dist4 < 150) {
    this.img4X = (this.mouseX - img4CenterX) * 0.3;
    this.img4Y = (this.mouseY - img4CenterY) * 0.3;
  } else {
    this.img4X = 0;
    this.img4Y = 0;
  }

  // img5
  const img5CenterX = window.innerWidth * 0.2;
  const img5CenterY = window.innerHeight * 0.1;

  const dist5 = Math.sqrt(
    Math.pow(this.mouseX - img5CenterX, 2) +
    Math.pow(this.mouseY - img5CenterY, 2)
  );

  if (dist5 < 150) {
    this.img5X = (this.mouseX - img5CenterX) * 0.3;
    this.img5Y = (this.mouseY - img5CenterY) * 0.3;
  } else {
    this.img5X = 0;
    this.img5Y = 0;
  }

   // img6
  const img6CenterX = window.innerWidth * 0.6;
  const img6CenterY = window.innerHeight * 0.9;

  const dist6 = Math.sqrt(
    Math.pow(this.mouseX - img6CenterX, 2) +
    Math.pow(this.mouseY - img6CenterY, 2)
  );

  if (dist6 < 150) {
    this.img6X = (this.mouseX - img6CenterX) * 0.3;
    this.img6Y = (this.mouseY - img6CenterY) * 0.3;
  } else {
    this.img6X = 0;
    this.img6Y = 0;
  }

    // img7
  const img7CenterX = window.innerWidth * 0.01;
  const img7CenterY = window.innerHeight * 0.9;

  const dist7 = Math.sqrt(
    Math.pow(this.mouseX - img7CenterX, 2) +
    Math.pow(this.mouseY - img7CenterY, 2)
  );

  if (dist7 < 450) {
    this.img7X = (this.mouseX - img7CenterX) * 0.3;
    this.img7Y = (this.mouseY - img7CenterY) * 0.3;
  } else {
    this.img7X = 0;
    this.img7Y = 0;
  }

   // img8
  const img8CenterX = window.innerWidth * 0.65;
  const img8CenterY = window.innerHeight * 0.35 ;

  const dist8 = Math.sqrt(
    Math.pow(this.mouseX - img8CenterX, 2) +
    Math.pow(this.mouseY - img8CenterY, 2)
  );

  if (dist8 < 450) {
    this.img8X = (this.mouseX - img8CenterX) * 0.3;
    this.img8Y = (this.mouseY - img8CenterY) * 0.3;
  } else {
    this.img8X = 0;
    this.img8Y = 0;
  }

   // img9
  const img9CenterX = window.innerWidth * 0.02;
  const img9CenterY = window.innerHeight * 0.15 ;

  const dist9 = Math.sqrt(
    Math.pow(this.mouseX - img9CenterX, 2) +
    Math.pow(this.mouseY - img9CenterY, 2)
  );

  if (dist9 < 450) {
    this.img9X = (this.mouseX - img9CenterX) * 0.3;
    this.img9Y = (this.mouseY - img9CenterY) * 0.3;
  } else {
    this.img9X = 0;
    this.img9Y = 0;
  }




}



}


