import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http/http';

import { ZentraderAuthService } from '../zen-auth/zentrader-auth-service.service';
import { environment } from '../../environments/environment';
import { UserInfo } from '../zen-auth/model/User';
import { Indicator } from './model/trade-system';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  private tradeSystemUrl = environment.backend_api + 'api/v1/trade-system';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  get(pk: string): Observable<Indicator> {
    const options = {headers: this.getHeader()};

    return this.http.get<Indicator>(`${this.tradeSystemUrl}/indicator/${pk}.json`, options);
  }

  list(): Observable<Indicator[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<Indicator[]>(`${this.tradeSystemUrl}.json`, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', Accept: 'application/json', Authorization: auth
    });

    return headers;
  }
}
