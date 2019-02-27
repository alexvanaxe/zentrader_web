import { Component, OnInit } from '@angular/core';
import { ZentraderAuthService } from '../zentrader-auth-service.service';
import { UserCredential, UserInfo } from '../model/User';
import { Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'zen-zentrader-auth',
  templateUrl: './zentrader-auth.component.html',
  styleUrls: ['./zentrader-auth.component.css']
})
export class ZentraderAuthComponent implements OnInit {

  userCredential: UserCredential;

  constructor(private zentraderAuthService: ZentraderAuthService, private router: Router) { }

  ngOnInit() {
    this.userCredential = new UserCredential();
  }

  userLogin() {
    this.zentraderAuthService.post(this.userCredential).subscribe(result => this.procedLogin(result), error => this.wrongCredentials(error));
  }

  procedLogin(userInfo: UserInfo) {
    const now_plus = moment().add(3600, 'seconds');
    console.log(now_plus);
    userInfo.conseded = moment().valueOf();
    this.zentraderAuthService.storeInfo(userInfo);
    this.router.navigate(['zenindex']);
  }

  wrongCredentials(error) {
    console.log(error);
  }
}
