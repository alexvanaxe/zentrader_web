import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Resume } from './model/resume';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';
import { UserInfo } from 'app/zen-auth/model/User';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumeUrl = environment.backend_api + 'api/v1/stock/resume';
  private resumeUserUrl = environment.backend_api + 'api/v1/stock/user_resume';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  list(): Observable<Resume[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<Resume[]>(`${this.resumeUrl}.json`, options);
  }

  listByUser(): Observable<Resume[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<Resume[]>(`${this.resumeUserUrl}.json`, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
