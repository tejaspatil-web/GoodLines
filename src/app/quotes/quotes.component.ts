import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  constructor(private service: ServiceService, private router: Router) {}

  color = 'black';
  dcolor = 'black';

  ngOnInit(): void {
    this.getData();
  }

  data: any;

  getData() {
    this.service.getData().subscribe((data) => {
      this.data = data;
    });
  }

  login = localStorage.getItem('login');

  like() {
    // if (this.color == this.dcolor) {
    //   this.color = 'green';
    // } else {
    //   this.color = 'black';
    // }
    if (this.login == 'true') {
      this.router.navigate(['/premium']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  dislike() {
    // this.router.navigate(['/signup']);
    //   if (this.color == this.dcolor) {
    //     this.dcolor = 'red';
    //   } else {
    //     this.dcolor = 'black';
    //   }
    if (this.login == 'true') {
      this.router.navigate(['/premium']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  showmore() {
    if (this.login == 'true') {
      this.router.navigate(['/premium']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
