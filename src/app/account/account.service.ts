import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

import { Account } from './model/account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountUrl = environment.backend_api + 'api/v1/account';

  constructor(private http: HttpClient) { }

  list(): Observable<Account[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<Account[]>(`${this.accountUrl}.json`, options);
  }

  getDefault(): Observable<Account> {
    const options = {headers: this.getHeader()};

    return this.http.get<Account>(`${this.accountUrl}/default.json`, options);

  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
