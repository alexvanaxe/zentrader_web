import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/http';

import { ZentraderAuthService } from '../zen-auth/zentrader-auth-service.service';
import { environment } from '../../environments/environment';
import { UserInfo } from '../zen-auth/model/User';

@Injectable({
  providedIn: 'root'
})
export class TradeSystemService {
  private tradeSystemUrl = environment.backend_api + 'api/v1/trade-system';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
