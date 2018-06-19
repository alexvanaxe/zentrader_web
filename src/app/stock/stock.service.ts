import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Stock } from './model/stock';

@Injectable()
export class StockService {
  private stockUrl = environment.backend_api + 'api/v1/stock';

  constructor(private  http: HttpClient) {
  }

  get(stock: Stock): Observable<Stock> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<Stock>(`${this.stockUrl}/${stock.pk}.json`, options);
  }

  list(): Observable<Stock[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<Stock[]>(`${this.stockUrl}.json`, options);
  }

  add(stock: Stock): Observable<Stock> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.post<Stock>(`${this.stockUrl}.json`, JSON.stringify(stock), options);
  }

  patch(stock: Stock): Observable<Stock> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.patch<Stock>(`${this.stockUrl}/${stock.pk}.json`, JSON.stringify(stock), options);
  }
}
