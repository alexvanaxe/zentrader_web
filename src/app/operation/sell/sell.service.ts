import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Sell } from '../model/sell';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  private sellUrl = environment.backend_api + 'api/v1/sell';

  constructor(private http: HttpClient) { }

  add(sell: Sell): Observable<Sell> {

    const options = {headers: this.getHeader()};

    return this.http.post<Sell>(`${this.sellUrl}.json`, JSON.stringify(sell), options);
  }

  list(): Observable<Sell[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<Sell[]>(`${this.sellUrl}.json`, options);
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
