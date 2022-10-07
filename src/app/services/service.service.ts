import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url_users =
    'https://raw.githubusercontent.com/tejaspatil-web/Api/main/Quotes.json';

  url = 'https://type.fit/api/quotes';

  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url_users);
  }

  quotes() {
    return this.http.get(this.url);
  }
}
