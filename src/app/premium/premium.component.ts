import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css'],
})
export class PremiumComponent implements OnInit {
  constructor(private serv: ServiceService, private route: Router) {}

  color = 'black';
  dcolor = 'black';

  ngOnInit(): void {
    this.gatData();
  }

  quotes: any;

  gatData() {
    this.serv.quotes().subscribe((data) => {
      this.quotes = data;
    });
  }

  onRoute(text: any) {
    this.route.navigate(['/content', text]);
  }

  // Like & Dislike

  login = localStorage.getItem('login');

  like() {
    if (this.color == this.dcolor) {
      this.color = 'green';
    } else {
      this.color = 'black';
    }
  }

  dislike() {
    if (this.color == this.dcolor) {
      this.dcolor = 'red';
    } else {
      this.dcolor = 'black';
    }
  }
}
