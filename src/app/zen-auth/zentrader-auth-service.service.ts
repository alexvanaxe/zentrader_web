import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as moment from 'moment';

import { environment } from '../../environments/environment';
import { UserCredential, UserInfo } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class ZentraderAuthService {


  private clientSecret = 'LoP4165ppWjeka2QSfl5nvJZQUTawgy1A1hCMHjorAjUeIT1xXpW2dLGuFlDBMkIVKM1yIzDE3gwcqa7fTNxPJ12V9uBQ0udWjatsT5WxsMVgP8gjTHVCJMirlb5ba43';
  private clientId = 'cyZPosG7hu8D1WF6rfOy6tsMQQ6tbhf6RR7pZpLe';


  constructor(private http: HttpClient) { }

  post(userCredential: UserCredential): Observable<UserInfo> {
    const authUrl = environment.backend_api + 'oauth/token/';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json',
      'Authorization': 'Basic ' +  btoa(`${this.clientId}:${this.clientSecret}`)
    });

    const options = {headers: headers};

    return this.http.post<UserInfo>(`${authUrl}`, `grant_type=${userCredential.grant_type}&username=${userCredential.username}&password=${userCredential.password}`, options);
  }

  refresh(): Observable<UserInfo> {
    const userInfo = this.recoverInfo();
    const authUrl = environment.backend_api + 'oauth/token/';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json',
      'Authorization': 'Basic ' +  btoa(`${this.clientId}:${this.clientSecret}`)
    });

    const options = {headers: headers};

    return this.http.post<UserInfo>(`${authUrl}`, `grant_type=refresh_token&refresh_token=${userInfo.refresh_token}`, options);
  }

  storeInfo(userInfo: UserInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  recoverInfo(): UserInfo {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return userInfo;
  }

  logoff() {
    localStorage.removeItem('userInfo');
  }

  isAuthenticated(): boolean {
    const userInfo = this.recoverInfo();
    

    if (userInfo) {
      const now_plus = moment(userInfo.conseded).add(userInfo.expires_in, 'seconds');
      if (now_plus < moment()) {
        return false;
      }

      return true;
    } else {
      return false;
    }

  }
}
