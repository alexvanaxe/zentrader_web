import { Component, OnInit, OnDestroy } from '@angular/core';
import { ZentraderAuthService } from '../zentrader-auth-service.service';
import { UserCredential, UserInfo } from '../model/User';
import { Router } from '@angular/router';

import * as moment from 'moment';
import { PostOfficerService } from 'app/postoffice/post-officer-service.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-zentrader-auth',
  templateUrl: './zentrader-auth.component.html',
  styleUrls: ['./zentrader-auth.component.css']
})
export class ZentraderAuthComponent implements OnInit, OnDestroy {

  userCredential: UserCredential;

  constructor(private zentraderAuthService: ZentraderAuthService, private router: Router, private postOfficerService: PostOfficerService) { }

  ngOnInit() {
    this.userCredential = new UserCredential();
  }

  ngOnDestroy() {}

  userLogin() {
    this.zentraderAuthService.post(this.userCredential).subscribe(result => this.procedLogin(result), error => this.wrongCredentials(error));
  }

  procedLogin(userInfo: UserInfo) {
    const now_plus = moment().add(3600, 'seconds');
    userInfo.conseded = moment().valueOf();
    this.zentraderAuthService.storeInfo(userInfo);
    this.router.navigate(['zenindex']);
  }

  wrongCredentials(error) {
    this.postOfficerService.deliverMessage('Wrong credentials or other most suspecious error. Sorry.');
  }
}
