import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private desc: ServiceService) {}

  Name: any;
  Email: any;
  Number: any;
  Gender: any;

  ngOnInit(): void {
    this.Name = localStorage.getItem('Name');
    this.Email = localStorage.getItem('Email');
    this.Number = localStorage.getItem('Number');
    this.Gender = localStorage.getItem('Gender');
  }

  clear() {
    localStorage.clear();
    location.reload();
  }
}
