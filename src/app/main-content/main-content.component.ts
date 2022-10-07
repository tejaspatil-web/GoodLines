import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  constructor(
    private active: ActivatedRoute,
    private ser: ServiceService,
    private clipboard: ClipboardService
  ) {}

  color = 'black';
  dcolor = 'black';

  ngOnInit(): void {
    this.getData();
    this.getParams();
  }

  quotes: any;
  get: any;

  getData() {
    this.ser.quotes().subscribe((data) => {
      this.quotes = data;
    });
  }

  getParams() {
    this.active.params.subscribe((data) => {
      this.get = data['text'];
    });
  }

  login = localStorage.getItem('login');

  like() {
    if (this.color == this.dcolor) {
      this.color = 'blue';
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

  display = 'none';
  id: any;

  cp: any;
  text: any;
  copy() {
    this.cp = document.getElementById('quotes.text');
    this.text = this.cp.innerHTML;
    this.clipboard.copyFromContent(this.text);
    this.display = 'block';
  }

  refresh() {
    window.location.reload();
  }
}
