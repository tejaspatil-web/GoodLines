import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.css'],
})
export class WildcardComponent implements OnInit {
  constructor(
    private ser: ServiceService,
    private active: ActivatedRoute,
    private copyApi: ClipboardService
  ) {}

  ngOnInit(): void {
    this.ser.quotes().subscribe((data) => {
      this.curr_data = data;
    });

    this.active.params.subscribe((para) => {
      this.curr_id = para;
    });
    // console.log(this.active.snapshot.paramMap.get('id'));
    this.h = this.active.snapshot.paramMap.get('id');
    console.log(this.h);
  }

  copy() {
    this.copyApi.copyFromContent(this.h);
  }

  curr_data: any;
  curr_id: any;
  h: any;
}
