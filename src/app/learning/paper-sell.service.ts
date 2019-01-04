import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaperSell } from './model/paper_sell';

@Injectable({
  providedIn: 'root'
})
export class PaperSellService {

  private paperSellUrl = environment.backend_api + 'api/v1/paper_sell'

  constructor(private http: HttpClient) { }

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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
