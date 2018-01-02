import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import {environment} from '../../../environments/environment';
import {Buy, BuyNested} from '../model/buy';

@Injectable()
export class BuyService {

  private buyUrl = environment.backend_api + 'api/v1/buy';
  private buyNestedUrl = environment.backend_api + 'api/v1/buy-nested';

  constructor(private http: Http) { }

  add(buy: Buy): Observable<Buy> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.post(`${this.buyUrl}.json`, JSON.stringify(buy), options).map(this.extractData).catch(this.handleError);
  }

  list(): Observable<BuyNested[]> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.get(`${this.buyNestedUrl}.json`, options).map((r: Response) => r.json() as Buy[]).catch(this.handleError);
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
