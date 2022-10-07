import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userSer: ServiceService) {}

  Name: any;

  ngOnInit(): void {
    this.name();
  }

  true = localStorage.getItem('login');

  name() {
    if (this.true == 'true') {
      this.Name = localStorage.getItem('Name');
    } else {
      this.Name = 'Login';
    }
  }
}
