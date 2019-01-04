import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { PaperBuy } from './model/paper_buy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperBuyService {

  private paperBuyUrl = environment.backend_api + 'api/v1/paper_buy'

  constructor(private http: HttpClient) { }

  post(paperBuy: PaperBuy): Observable<PaperBuy> {
    
    const options = {headers: this.getHeader()}

    return this.http.post<PaperBuy>(`${this.paperBuyUrl}.json`, JSON.stringify(paperBuy), options);
  }

  get(pk: string): Observable<PaperBuy> {

    const options = {headers: this.getHeader()}

    return this.http.get<PaperBuy>(`${this.paperBuyUrl}/${pk}.json`, options);
  }

  delete(pk: string): Observable<void> {

    const options = {headers: this.getHeader()}

    return this.http.delete<void>(`${this.paperBuyUrl}/${pk}.json`, options);
  }

  list(): Observable<PaperBuy[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<PaperBuy[]>(`${this.paperBuyUrl}.json`, options);
  }

  patch(paperBuy: PaperBuy): Observable<PaperBuy> {

    const options = {headers: this.getHeader()};

    return this.http.patch<PaperBuy>(`${this.paperBuyUrl}/${paperBuy.pk}.json`, JSON.stringify(paperBuy, this.replaceUndefinedOrNull), options);
  }

  private replaceUndefinedOrNull(key, value) {
    if (value === '') {
      return null;
    }
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
