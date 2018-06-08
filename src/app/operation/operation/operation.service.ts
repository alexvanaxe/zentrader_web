import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import {environment} from '../../../environments/environment';

import {Operation, OperationNested} from '../model/operation';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OperationService {
  private operationUrl = environment.backend_api + 'api/v1/operation';
  private operationNestedUrl = environment.backend_api + 'api/v1/operation-nested';

  constructor(private http: HttpClient) {
  }

  add(operation: Operation): Observable<Operation> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.post<Operation>(`${this.operationUrl}.json`, JSON.stringify(operation), options);
  }

  patch(operation: Operation): Observable<Operation> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};
    return this.http.patch<Operation>(`${this.operationUrl}/${operation.pk}.json`, JSON.stringify(operation,
      this.replaceUndefinedOrNull), options);
  }

  delete(operation: Operation): Observable<Response> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};
    return this.http.delete<Response>(`${this.operationUrl}/${operation.pk}.json`, options);
  }

  private replaceUndefinedOrNull(key, value) {
    if (value === null || value === undefined) {
      return undefined;
    }

    return value;
  }

  list(): Observable<OperationNested[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<OperationNested[]>(`${this.operationNestedUrl}.json`, options);
  }

  cost(pk: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get(`${this.operationUrl}/${pk}/cost.json`, options);
  }
}
