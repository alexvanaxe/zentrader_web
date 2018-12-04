import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Experience } from '../model/experience';

@Injectable()
export class ExperienceService {

  private experienceUrl = environment.backend_api + 'api/v1/experience';

  constructor(private http: HttpClient) {
  }

  add(experience: Experience): Observable<Experience> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};
    console.log(JSON.stringify(experience));

    return this.http.post<Experience>(`${this.experienceUrl}.json`, JSON.stringify(experience), options);
  }

  private replaceUndefinedOrNull(key, value) {
    if (value === "") {
      return null;
    }
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  patch(experience: Experience): Observable<Experience> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};
    return this.http.patch<Experience>(`${this.experienceUrl}/${experience.pk}.json`, JSON.stringify(experience, this.replaceUndefinedOrNull), options);
  }

  delete(experience: Experience): Observable<Response> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};
    return this.http.delete<Response>(`${this.experienceUrl}/${experience.pk}.json`, options);
  }

  get(pk: number): Observable<Experience> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<Experience>(`${this.experienceUrl}/${pk}.json`, options);
  }

  list(): Observable<Experience[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<Experience[]>(`${this.experienceUrl}.json`, options);
  }
}

