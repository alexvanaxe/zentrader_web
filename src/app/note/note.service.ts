import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notesUrl = environment.backend_api + 'api/v1/note';

  constructor(private http: HttpClient) { }

  add(note: Note): Observable<Note> {
    const options = {headers: this.getHeader()};

    return this.http.post<Note>(`${this.notesUrl}.json`, JSON.stringify(note), options);

  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
