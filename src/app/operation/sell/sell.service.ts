import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Sell } from '../model/sell';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class SellService {

  private sellUrl = environment.backend_api + 'api/v1/sell';

  constructor(private http: HttpClient) { }

  add(sell: Sell): Observable<Sell> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.post<Sell>(`${this.sellUrl}.json`, JSON.stringify(sell), options);
  }
}
