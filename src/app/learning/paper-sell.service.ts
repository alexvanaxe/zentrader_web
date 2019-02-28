import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaperSell } from './model/paper_sell';
import { UserInfo } from 'app/zen-auth/model/User';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PaperSellService {

  private paperSellUrl = environment.backend_api + 'api/v1/paper_sell'
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo(); 
  }

  post(paperSell: PaperSell): Observable<PaperSell> {
    
    const options = {headers: this.getHeader()}

    return this.http.post<PaperSell>(`${this.paperSellUrl}.json`, JSON.stringify(paperSell), options);
  }

  get(pk: string): Observable<PaperSell> {

    const options = {headers: this.getHeader()}

    return this.http.get<PaperSell>(`${this.paperSellUrl}/${pk}.json`, options);
  }

  delete(pk: string): Observable<void> {

    const options = {headers: this.getHeader()}

    return this.http.delete<void>(`${this.paperSellUrl}/${pk}.json`, options);
  }

  list(): Observable<PaperSell[]> {
    const options = {headers: this.getHeader()};

    return this.http.get<PaperSell[]>(`${this.paperSellUrl}.json`, options);
  }

  patch(paperSell: PaperSell): Observable<PaperSell> {

    const options = {headers: this.getHeader()};

    return this.http.patch<PaperSell>(`${this.paperSellUrl}/${paperSell.pk}.json`, JSON.stringify(paperSell, this.replaceUndefinedOrNull), options);
  }

  private replaceUndefinedOrNull(key, value) {
    if (value === '') {
      return null;
    }
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
