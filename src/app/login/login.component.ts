import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  loginform: any = FormGroup;

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  email: any;
  localemail: any;

  pass: any;
  localpass: any;

  clicklogin() {
    this.email = this.loginform.value.email;
    this.pass = this.loginform.value.password;
    this.localemail = localStorage.getItem('Email');
    this.localpass = localStorage.getItem('Password');
    console.log(this.email);
    console.log(this.localemail);
    this.loginform.reset();

    if (this.email == this.localemail && this.pass == this.localpass) {
      localStorage.setItem('login', 'true');
      this.router.navigate(['/premium']);
    } else {
      alert('Email or Password is Incorrect');
    }
  }
}
