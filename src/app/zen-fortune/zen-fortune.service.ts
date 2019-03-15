import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { UserInfo } from 'app/zen-auth/model/User';
import { Fortune } from './model/fortune';
import { Observable } from 'rxjs/internal/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ZenFortuneService {

  private fortuneUrl = environment.backend_api + 'api/v1/fortune';

  constructor(private http: HttpClient) {
  }

  get(): Observable<Fortune> {

    const options = {headers: this.getHeader()};

    return this.http.get<Fortune>(`${this.fortuneUrl}.json`, options);
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
