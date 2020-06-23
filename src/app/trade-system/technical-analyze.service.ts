import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { UserInfo } from '../zen-auth/model/User';
import { ZentraderAuthService } from '../zen-auth/zentrader-auth-service.service';
import { TechnicalAnalyze } from './model/trade-system';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TechnicalAnalyzeService {
  private tradeSystemUrl = environment.backend_api + 'api/v1/trade-system';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  /*get(pk: string): Observable<TechnicalAnalyze> {
    const options = {headers: this.getHeader()};

    return this.http.get<TechnicalAnalyze>(`${this.tradeSystemUrl}/technical_analyze/${pk}.json`, options);
  }*/

  add(technicalAnalyze: TechnicalAnalyze): Observable<TechnicalAnalyze> {
    const options = {headers: this.getHeader()};

    return this.http.post<TechnicalAnalyze>(`${this.tradeSystemUrl}/technical_analyze.json`, JSON.stringify(technicalAnalyze), options);
  }

  remove(technicalAnalyze: TechnicalAnalyze): Observable<null> {
    const options = {headers: this.getHeader()};

    return this.http.delete<null>(`${this.tradeSystemUrl}/technical_analyze/${technicalAnalyze.pk}.json`, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', Accept: 'application/json', Authorization: auth
    });

    return headers;
  }
}
