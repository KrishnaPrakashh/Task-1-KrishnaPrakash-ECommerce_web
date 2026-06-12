import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {


  constructor(private router: Router) {}

  login() {
    // Fake login: no credentials stored
    alert('Logged in successfully!');
    this.router.navigate(['/home']);
 /*
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
       alert('Login successful!');  
      this.router.navigate(['/product']);
    } else {
      this.errorMessage = 'Please enter a valid email and password';
    }
  }
    */
}
}
