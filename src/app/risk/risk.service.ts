import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Risk } from './model/risk';
import { Observable } from 'rxjs';
import { UserInfo } from 'app/zen-auth/model/User';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  private riskUrl = environment.backend_api + 'api/v1/risk';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
      this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  get(): Observable<Risk> {
    const options = {headers: this.getHeader()};

    return this.http.get<Risk>(`${this.riskUrl}.json`, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
