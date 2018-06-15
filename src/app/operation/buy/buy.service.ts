import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Buy } from '../model/buy';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BuyService {

  private buyUrl = environment.backend_api + 'api/v1/buy';

  constructor(private http: HttpClient) { }

  add(buy: Buy): Observable<Buy> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.post<Buy>(`${this.buyUrl}.json`, JSON.stringify(buy), options);
  }

  list(): Observable<Buy[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<Buy[]>(`${this.buyUrl}.json`, options);
  }
}
