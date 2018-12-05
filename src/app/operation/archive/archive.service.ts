import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Archive } from '../model/archive';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private archiveUrl = environment.backend_api + 'api/v1/operation'

  constructor(private http: HttpClient) { }

  patch(pk: string): Observable<Archive> {

    const options = {headers: this.getHeader()};

    return this.http.patch<Archive>(`${this.archiveUrl}/${pk}/archive.json`, {pk: pk}, options);
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
