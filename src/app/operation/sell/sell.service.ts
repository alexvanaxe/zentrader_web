import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Sell, SellPaginated } from '../model/sell';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';
import { UserInfo } from 'app/zen-auth/model/User';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  private sellUrl = environment.backend_api + 'api/v1/sell';
  private sellPaginatedUrl = environment.backend_api + 'api/v1/sell_paginate';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService ) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  add(sell: Sell): Observable<Sell> {

    const options = {headers: this.getHeader()};

    return this.http.post<Sell>(`${this.sellUrl}.json`, JSON.stringify(sell), options);
  }

  get(pk: string): Observable<Sell> {

    const options = {headers: this.getHeader()};

    return this.http.get<Sell>(`${this.sellUrl}/${pk}.json`, options);
  }

  list(pkBuy = ''): Observable<Sell[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<Sell[]>(`${this.sellUrl}.json?buy=${pkBuy}`, options);
  }

  list_paginated(sell_filter = null, page = 1): Observable<SellPaginated> {
    if (sell_filter == null) {
      sell_filter = new Sell();
    }

    const options = {headers: this.getHeader()};

    return this.http.get<SellPaginated>(`${this.sellPaginatedUrl}.json?buy=${sell_filter.buy}&archived=${sell_filter.archived}&page=${page}`, options);
  }

  retrieveFromUrl(url): Observable<SellPaginated> {
    const options = {headers: this.getHeader()};

    return this.http.get<SellPaginated>(`${url}`, options);
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

  patch(sell: Sell): Observable<Sell> {

    const options = {headers: this.getHeader()};

    return this.http.patch<Sell>(`${this.sellUrl}/${sell.pk}.json`, JSON.stringify(sell, this.replaceUndefinedOrNull), options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }

}
