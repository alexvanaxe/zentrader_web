import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { ZentraderAuthService } from '../zen-auth/zentrader-auth-service.service';
import { UserInfo } from '../zen-auth/model/User';
import { TotalProfitReport, TotalProfitMonthlyReport } from './model/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reportUrl = environment.backend_api + 'api/v1/report';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  get(): Observable<TotalProfitReport> {
    const options = {headers: this.getHeader()};

    return this.http.get<TotalProfitReport>(`${this.reportUrl}/total_profit.json`, options);
  }

  getMonthlyReport(): Observable<TotalProfitMonthlyReport> {
    const options = {headers: this.getHeader()};

    return this.http.get<TotalProfitMonthlyReport>(`${this.reportUrl}/total_profit_monthly.json`, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
