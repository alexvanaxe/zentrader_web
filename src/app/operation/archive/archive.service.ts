import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Archive } from '../model/archive';
import { UserInfo } from 'app/zen-auth/model/User';
import { ZentraderAuthService } from 'app/zen-auth/zentrader-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private archiveUrl = environment.backend_api + 'api/v1/operation';
  private userInfo: UserInfo;

  constructor(private http: HttpClient, private zentraderAuthService: ZentraderAuthService) {
        this.userInfo = this.zentraderAuthService.recoverInfo();
  }

  patch(pk: string): Observable<Archive> {

    const options = {headers: this.getHeader()};

    return this.http.patch<Archive>(`${this.archiveUrl}/${pk}/archive.json`, {pk: pk}, options);
  }

  getHeader(): HttpHeaders {
    const auth = ` Bearer ${this.userInfo.access_token}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': auth
    });

    return headers;
  }
}
