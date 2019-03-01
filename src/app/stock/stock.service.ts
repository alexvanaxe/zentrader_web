import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Stock } from './model/stock';
import { UserInfo } from 'app/zen-auth/model/User';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stockUrl = environment.backend_api + 'api/v1/stock';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  get(stock: Stock): Observable<Stock> {

    const options = {headers: this.getHeader()};

    return this.http.get<Stock>(`${this.stockUrl}/${stock.pk}.json`, options);
  }

  list(): Observable<Stock[]> {

    const options = {headers: this.getHeader()};

    return this.http.get<Stock[]>(`${this.stockUrl}.json`, options);
  }

  add(stock: Stock): Observable<Stock> {

    const options = {headers: this.getHeader()};

    return this.http.post<Stock>(`${this.stockUrl}.json`, JSON.stringify(stock), options);
  }

  patch(stock: Stock): Observable<Stock> {

    const options = {headers: this.getHeader()};

    return this.http.patch<Stock>(`${this.stockUrl}/${stock.pk}.json`, JSON.stringify(stock), options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
