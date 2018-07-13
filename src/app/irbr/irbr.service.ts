import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { IrBr } from './model/irbr';

@Injectable({
  providedIn: 'root'
})
export class IrbrService {

  private irbrUrl = environment.backend_api + 'api/v1/ir_br';

  constructor(private http: HttpClient) { }

  get(): Observable<IrBr> {
    const options = {headers: this.getHeader()};

    return this.http.get<IrBr>(`${this.irbrUrl}.json`, options);
  } 

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
