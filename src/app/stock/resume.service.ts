import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Resume } from './model/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumeUrl = environment.backend_api + 'api/v1/stock/resume';
  constructor(private http: HttpClient) { }

  list(): Observable<Resume[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<Resume[]>(`${this.resumeUrl}.json`, options);
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
