import {Injectable} from '@angular/core';
import '../rxjs-operators.ts';

import {environment} from '../../environments/environment';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Stock} from './model/stock';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StockService {
  private stockUrl = environment.backend_api + 'api/v1/stock';

  constructor(private  http: Http) {
  }

  list(): Observable<Stock[]> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.get(`${this.stockUrl}.json`, options).map((r: Response) => r.json() as Stock[]);
  }

  add(stock: Stock): Observable<Stock> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.post(`${this.stockUrl}.json`, JSON.stringify(stock), options).map(this.extractData)
      .catch(this.handleError);
  }

  patch(stock: Stock): Observable<Stock> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.patch(`${this.stockUrl}/${stock.pk}.json`, JSON.stringify(stock), options).map(this.extractData)
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
