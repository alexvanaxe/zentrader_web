import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Buy } from '../model/buy';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BuyService {

  private buyUrl = environment.backend_api + 'api/v1/buy';

  
  constructor(private http: HttpClient) { 
  }

  private replaceUndefinedOrNull(key, value) {
    if (value === "") {
      return null;
    }
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  get(pk: string, detailed=false): Observable<Buy> {
    const options = {headers: this.getHeader()};

    return this.http.get<Buy>(`${this.buyUrl}/${pk}.json?detailed=${detailed}`, options);
  }

  patch(buy: Buy): Observable<Buy> {
    const options = {headers: this.getHeader()};

    return this.http.patch<Buy>(`${this.buyUrl}/${buy.pk}.json`, JSON.stringify(buy, this.replaceUndefinedOrNull), options);
  }

  add(buy: Buy): Observable<Buy> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.post<Buy>(`${this.buyUrl}.json`, JSON.stringify(buy), options);
  }

  list(detailed=false, experience_pk=''): Observable<Buy[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<Buy[]>(`${this.buyUrl}.json?experience=${experience_pk}`, options);
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
