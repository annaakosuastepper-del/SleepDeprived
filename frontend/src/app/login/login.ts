import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

}


