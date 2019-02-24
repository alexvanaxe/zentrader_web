import { Component, OnInit } from '@angular/core';
import { ZentraderAuthService } from '../zentrader-auth-service.service';
import { UserCredential, UserInfo } from '../model/User';
import { Router } from '@angular/router';

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
    this.zentraderAuthService.post(this.userCredential).subscribe(result => this.procedLogin(result));
  }

  procedLogin(userInfo: UserInfo) {
    console.log(userInfo);
    this.zentraderAuthService.storeInfo(userInfo);
    this.router.navigate(['sell-focus']);
  }
}
