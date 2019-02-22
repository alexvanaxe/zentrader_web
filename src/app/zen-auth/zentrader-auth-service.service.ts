import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { UserCredential } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class ZentraderAuthServiceService {


  private clientSecret = 'LoP4165ppWjeka2QSfl5nvJZQUTawgy1A1hCMHjorAjUeIT1xXpW2dLGuFlDBMkIVKM1yIzDE3gwcqa7fTNxPJ12V9uBQ0udWjatsT5WxsMVgP8gjTHVCJMirlb5ba43';
  private clientId = 'cyZPosG7hu8D1WF6rfOy6tsMQQ6tbhf6RR7pZpLe';


  constructor(private http: HttpClient) { }

  post(userCredential: UserCredential): Observable<any> {
    const authUrl = `http://localhost:8000/` + 'oauth/token/';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json',
      'Authorization': "Basic " +  btoa(`${this.clientId}:${this.clientSecret}`)
    });

    const options = {headers: headers};

    return this.http.post<any>(`${authUrl}`, `grant_type=${userCredential.grant_type}&username=${userCredential.username}&password=${userCredential.password}`, options);
  }
}
