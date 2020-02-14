import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Experience } from '../model/experience';
import { UserInfo } from 'app/zen-auth/model/User';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';

@Injectable()
export class ExperienceService {

  private experienceUrl = environment.backend_api + 'api/v1/experience';
  private experienceByStockUrl = environment.backend_api + 'api/v1/experience_by_stock';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
    this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  add(experience: Experience): Observable<Experience> {

    const options = {headers: this.getHeader()};
    console.log(JSON.stringify(experience));

    return this.http.post<Experience>(`${this.experienceUrl}.json`, JSON.stringify(experience), options);
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

  patch(experience: Experience): Observable<Experience> {

    const options = {headers: this.getHeader()};
    return this.http.patch<Experience>(`${this.experienceUrl}/${experience.pk}.json?detailed=true`,
      JSON.stringify(experience, this.replaceUndefinedOrNull), options);
  }

  delete(experience: Experience): Observable<Response> {

    const options = {headers: this.getHeader()};
    return this.http.delete<Response>(`${this.experienceUrl}/${experience.pk}.json`, options);
  }

  get(pk: string, detailed = true): Observable<Experience> {

    const options = {headers: this.getHeader()};

    return this.http.get<Experience>(`${this.experienceUrl}/${pk}.json?detailed=${detailed}`, options);
  }

  list(detailed = true): Observable<Experience[]> {

    const options = {headers: this.getHeader()};

    return this.http.get<Experience[]>(`${this.experienceUrl}.json?detailed=${detailed}`, options);
  }

  list_by_stock(stock_id): Observable<Experience[]> {

    const options = {headers: this.getHeader()};

    return this.http.get<Experience[]>(`${this.experienceByStockUrl}/${stock_id}.json`, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}

