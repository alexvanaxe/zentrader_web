import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { UserInfo } from '../zen-auth/model/User';
import { ZentraderAuthService } from '../zen-auth/zentrader-auth-service.service';
import { Analysis } from './model/trade-system';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private tradeSystemUrl = environment.backend_api + 'api/v1/trade-system';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  add(technicalAnalyze: Analysis): Observable<Analysis> {
    const options = {headers: this.getHeader()};

    return this.http.post<Analysis>(`${this.tradeSystemUrl}/analysis.json`, JSON.stringify(Analysis), options);
  }

  list(): Observable<Analysis[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<Analysis[]>(`${this.tradeSystemUrl}.json`, options);
  }

  get(pk: string): Observable<Analysis> {
    const options = {headers: this.getHeader()};

    return this.http.get<Analysis>(`${this.tradeSystemUrl}/analysis/${pk}.json`, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', Accept: 'application/json', Authorization: auth
    });

    return headers;
  }
}
