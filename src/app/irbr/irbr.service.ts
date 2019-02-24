import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { IrBr } from './model/irbr';
import { UserInfo } from 'app/zen-auth/model/User';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class IrbrService {

  private irbrUrl = environment.backend_api + 'api/v1/ir_br';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo(); 
  }

  get(): Observable<IrBr> {
    const options = {headers: this.getHeader()};

    return this.http.get<IrBr>(`${this.irbrUrl}.json`, options);
  } 

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
