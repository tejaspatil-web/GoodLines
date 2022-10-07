import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  exform: any = FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      number: new FormControl('+91', [
        Validators.required,
        Validators.pattern(
          '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
        ),
      ]),
      radio: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  name: any;
  email: any;
  number: any;
  password: any;
  radio: any;

  clicksubmit() {
    this.name = this.exform.value.name;
    this.email = this.exform.value.email;
    this.number = this.exform.value.number;
    this.password = this.exform.value.password;
    this.radio = this.exform.value.radio;

    localStorage.setItem('Name', this.name);
    localStorage.setItem('Email', this.email);
    localStorage.setItem('Number', this.number);
    localStorage.setItem('Password', this.password);
    localStorage.setItem('Gender', this.radio);
    console.log(this.exform.value);
    this.exform.reset();
    alert('SignUp Successfully');
    this.router.navigate(['/login']);
  }
}
