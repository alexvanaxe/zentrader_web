import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Risk } from './model/risk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  private riskUrl = environment.backend_api + 'api/v1/risk';
  
  constructor(private http: HttpClient) { }

  get(): Observable<Risk> {
    const options = {headers: this.getHeader()};

    return this.http.get<Risk>(`${this.riskUrl}.json`, options);
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
