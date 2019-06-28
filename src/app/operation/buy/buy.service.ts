import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Buy } from '../model/buy';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';
import { UserInfo } from 'app/zen-auth/model/User';

@Injectable()
export class BuyService {

  private buyUrl = environment.backend_api + 'api/v1/buy';
  private userInfo: UserInfo;
  
  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) { 
    this.userInfo = this.zentraderAuthService.recoverInfo(); 
  }

  private replaceUndefinedOrNull(key, value) {
    if (value === "") {
      return null;
    }
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  get(pk: string, detailed=false): Observable<Buy> {
    const options = {headers: this.getHeader()};

    return this.http.get<Buy>(`${this.buyUrl}/${pk}.json?detailed=${detailed}`, options);
  }

  patch(buy: Buy): Observable<Buy> {
    const options = {headers: this.getHeader()};

    return this.http.patch<Buy>(`${this.buyUrl}/${buy.pk}.json`, JSON.stringify(buy, this.replaceUndefinedOrNull), options);
  }

  add(buy: Buy): Observable<Buy> {


    const options = {headers: this.getHeader()};

    return this.http.post<Buy>(`${this.buyUrl}.json`, JSON.stringify(buy), options);
  }

  list(buy_filter = null): Observable<Buy[]> {
    if (buy_filter == null) {
      buy_filter = new Buy();
    }

    const options = {headers: this.getHeader()};

    return this.http.get<Buy[]>(`${this.buyUrl}.json?experience=${buy_filter.experience}&archived=${buy_filter.archived}`, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
