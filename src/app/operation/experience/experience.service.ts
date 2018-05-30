import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import {environment} from '../../../environments/environment';
import {Experience, ExperienceNested} from '../model/experience';

@Injectable()
export class ExperienceService {

  private experienceUrl = environment.backend_api + 'api/v1/experience';
  private experienceNestedUrl = environment.backend_api + 'api/v1/experience-nested';

  constructor(private http: Http) {
  }

  add(experience: Experience): Observable<Experience> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.post(`${this.experienceUrl}.json`, JSON.stringify(experience), options).map(this.extractData)
      .catch(this.handleError);
  }
  private replaceUndefinedOrNull(key, value) {
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  patch(experience: Experience): Observable<Experience> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});
    return this.http.patch(`${this.experienceUrl}/${experience.pk}.json`, JSON.stringify(experience, this.replaceUndefinedOrNull), options).map(this.extractData)
      .catch(this.handleError);
  }

  delete(experience: Experience): Observable<Response> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});
    return this.http.delete(`${this.experienceUrl}/${experience.pk}.json`, options).map(this.extractData)
      .catch(this.handleError);
  }

  list() {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.get(`${this.experienceUrl}.json`, options).map((r: Response) => r.json() as Experience[]);
  }

  listNested() {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.get(`${this.experienceNestedUrl}.json`, options).map((r: Response) => r.json() as ExperienceNested[]);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(error);
  }
}

