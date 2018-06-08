import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {OperationType} from '../model/operation-type';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class OperationTypeService {

  private operationTypeUrl = environment.backend_api + 'api/v1/operation-type';

  constructor(private http: HttpClient) { }

  list(): Observable<OperationType[]> {
   const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });

    const options = {headers: headers};

    return this.http.get<OperationType[]>(`${this.operationTypeUrl}.json`, options);
  }
}
