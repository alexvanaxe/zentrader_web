import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import '../../rxjs-operators.ts';

import {environment} from '../../../environments/environment';

import {Operation, OperationNested} from '../model/operation';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OperationService {
  private operationUrl = environment.backend_api + 'api/v1/operation';
  private operationNestedUrl = environment.backend_api + 'api/v1/operation-nested';

  constructor(private http: Http) {
  }

  add(operation: Operation): Observable<Operation> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.post(`${this.operationUrl}.json`, JSON.stringify(operation), options).map(this.extractData)
      .catch(this.handleError);
  }

  patch(operation: Operation): Observable<Operation> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});
    return this.http.patch(`${this.operationUrl}/${operation.pk}.json`, JSON.stringify(operation, this.replaceUndefinedOrNull), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  delete(operation: Operation): Observable<Response> {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});
    return this.http.delete(`${this.operationUrl}/${operation.pk}.json`, options);
  }

  private replaceUndefinedOrNull(key, value) {
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  list() {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.get(`${this.operationNestedUrl}.json`, options).map((r: Response) => r.json() as OperationNested[]);
  }

  cost(pk: string) {
    const headers = new Headers({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = new RequestOptions({headers: headers});

    return this.http.get(`${this.operationUrl}/${pk}/cost.json`, options).map((r: Response) => r.json() as Operation[]);
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
