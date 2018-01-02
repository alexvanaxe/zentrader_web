import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import {environment} from '../../../environments/environment';
import {Sell} from '../model/sell';

@Injectable()
export class SellService {

  private sellUrl = environment.backend_api + 'api/v1/sell';

  constructor(private http: Http) { }

  add(sell: Sell): Observable<Sell> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.post(`${this.sellUrl}.json`, JSON.stringify(sell), options).map(this.extractData)
      .catch(this.handleError);
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
