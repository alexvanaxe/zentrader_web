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

  private replaceUndefinedOrNull(key, value) {
    if (value === "") {
      return null;
    }
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  add(note: Note): Observable<Note> {
    const options = {headers: this.getHeader()};

    return this.http.post<Note>(`${this.notesUrl}.json`, JSON.stringify(note), options);

  }

  patch(note: Note): Observable<Note> {

    const options = {headers: this.getHeader()};

    return this.http.patch<Note>(`${this.notesUrl}/${note.pk}.json`, JSON.stringify(note, this.replaceUndefinedOrNull), options);
  }

  get(operationPk: String): Observable<Note[]>{
    const options = {headers: this.getHeader()};

    return this.http.get<Note[]>(`${this.notesUrl}.json?operation=${operationPk}`, options);
  }

  delete(note: Note): Observable<null> {

    const options = {headers: this.getHeader()};

    return this.http.delete<null>(`${this.notesUrl}/${note.pk}.json`, options);
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    return headers;
  }
}
